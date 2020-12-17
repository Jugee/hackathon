import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default function ChartBar() {
  /* Chart code */
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  let chart = am4core.create("chartdivBar", am4charts.XYChart);

  // Add data
  chart.data = [
    {
      animal: "Янгир",
      income: 70,
    },
    {
      animal: "Ямаа",
      income: 18,
    },
    {
      animal: "Аргал",
      income: 11,
    },
    {
      animal: "Хонь",
      income: 4,
    },
    {
      animal: "Шувуу",
      income: 2,
    },
  ];

  // Create axes
  let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "animal";
  categoryAxis.numberFormatter.numberFormat = "#";
  categoryAxis.renderer.inversed = true;
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.cellStartLocation = 0.1;
  categoryAxis.renderer.cellEndLocation = 0.9;

  let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.opposite = true;

  // Create series
  function createSeries(field, name) {
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = field;
    series.dataFields.categoryY = "animal";
    // series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
    series.columns.template.height = am4core.percent(100);
    series.sequencedInterpolation = true;

    let valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueX}%";
    valueLabel.label.horizontalCenter = "left";
    valueLabel.label.dx = 10;
    valueLabel.label.hideOversized = false;
    valueLabel.label.truncate = false;

    let categoryLabel = series.bullets.push(new am4charts.LabelBullet());
    categoryLabel.label.text = "{name}";
    categoryLabel.label.horizontalCenter = "right";
    categoryLabel.label.dx = -10;
    categoryLabel.label.fill = am4core.color("#fff");
    categoryLabel.label.hideOversized = false;
    categoryLabel.label.truncate = false;
  }

  createSeries("income", "Income");

  return (
    <div
      id="chartdivBar"
      style={{
        color: "white",
        background: "white",
        height: "400px",
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    ></div>
  );
}
