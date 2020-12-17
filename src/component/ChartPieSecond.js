import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
export default function ChartPieSecond() {
  /**
   * ---------------------------------------
   * This demo was created using amCharts 4.
   *
   * For more information visit:
   * https://www.amcharts.com/
   *
   * Documentation is available at:
   * https://www.amcharts.com/docs/v4/
   * ---------------------------------------
   */

  // Set theme
  am4core.useTheme(am4themes_animated);

  // Create chart instance
  var chart = am4core.create("chartdiv2", am4charts.PieChart3D);

  // Let's cut a hole in our Pie chart the size of 40% the radius
  chart.innerRadius = am4core.percent(40);

  // Add data
  chart.data = [
    {
      land: "Cөөгтэй бэлчээр",
      percent: 56.0,
    },
    {
      land: "Заган ой",
      percent: 22.9,
    },
    {
      land: "Чулуутай бэлчээр",
      percent: 20.3,
    },
    {
      land: "Цэвэр бэлчээр",
      percent: 0.5,
    },
    {
      land: "Дорвонтой бэлчээр",
      percent: 0.1,
    },
    {
      land: "Нуур",
      percent: 0.0,
    },
  ];

  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries3D());
  pieSeries.dataFields.value = "percent";
  pieSeries.dataFields.category = "land";
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;

  // Add chart title
  // var title = chart.titles.create();
  // title.text = "Дашбоард";
  // title.fontSize = 25;
  // title.marginBottom = 30;

  // Disabling labels and ticks on inner circle
  pieSeries.labels.template.disabled = true;
  pieSeries.ticks.template.disabled = true;

  //gradient
  var rgm = new am4core.LinearGradientModifier();
  rgm.brightnesses.push(0, -0.4);
  pieSeries.slices.template.fillModifier = rgm;

  var rgm2 = new am4core.LinearGradientModifier();
  rgm2.brightnesses.push(0, -0.4);

  pieSeries.slices.template.strokeModifier = rgm2;
  pieSeries.slices.template.strokeOpacity = 1;
  pieSeries.slices.template.strokeWidth = 1;

  // Disable sliding out of slices
  pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
  pieSeries.slices.template.states.getKey("hover").properties.scale = 1.1;

  chart.legend = new am4charts.Legend();
  chart.legend.position = "right";

  return (
    <div
      id="chartdiv2"
      style={{
        color: "white!important",
        background: "white",
        height: "400px",
        width: "100%",
        // border: "3px solid #ff850a",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    />
  );
}
