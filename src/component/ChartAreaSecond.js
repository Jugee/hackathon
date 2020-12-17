import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default function ChartAreaSecond() {
  /* Chart code */
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  let chart = am4core.create("chartdivArea2", am4charts.XYChart);

  chart.data = [
    {
      year: "2020",
      max: 11423,
      medium: 11423,
      low: 11423,
    },
    {
      year: "2022",
      max: 12726,
      medium: 12764,
      low: 12820,
    },
    {
      year: "2024",
      max: 14105,
      medium: 14398,
      low: 14856,
    },
    {
      year: "2026",
      max: 14596,
      medium: 15358,
      low: 16627,
    },
    {
      year: "2028",
      max: 14136,
      medium: 15434,
      low: 17746,
    },
    {
      year: "2030",
      max: 13068,
      medium: 14825,
      low: 18180,
    },
    {
      year: "2032",
      max: 11755,
      medium: 13833,
      low: 18073,
    },
    {
      year: "2034",
      max: 10438,
      medium: 12704,
      low: 17612,
    },
    {
      year: "2036",
      max: 9238,
      medium: 11588,
      low: 16958,
    },
    {
      year: "2038",
      max: 8200,
      medium: 10654,
      low: 16225,
    },
    {
      year: "2040",
      max: 7325,
      medium: 9661,
      low: 15486,
    },
    {
      year: "2042",
      max: 6599,
      medium: 8883,
      low: 14786,
    },
    {
      year: "2044",
      max: 5999,
      medium: 8222,
      low: 14144,
    },
    {
      year: "2046",
      max: 5505,
      medium: 7663,
      low: 13569,
    },
    {
      year: "2048",
      max: 5098,
      medium: 7194,
      low: 13062,
    },
    {
      year: "2050",
      max: 4761,
      medium: 6799,
      low: 12619,
    },
  ];

  chart.dateFormatter.inputDateFormat = "yyyy";
  chart.exporting.menu = new am4core.ExportMenu();
  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 60;
  dateAxis.startLocation = 0.5;
  dateAxis.endLocation = 0.5;
  dateAxis.baseInterval = {
    timeUnit: "year",
    count: 1,
  };

  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.tooltip.disabled = true;

  let series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.dateX = "year";
  series.name = "Уул уурхайн идэвхжил өндөр";
  series.dataFields.valueY = "max";
  series.tooltipHTML =
    "<img src='https://www.flaticon.com/svg/static/icons/svg/3103/3103476.svg' style='vertical-align:bottom; margin-right: 10px; width:32px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
  series.tooltipText = "[#000]{valueY.value}[/]";
  series.tooltip.background.fill = am4core.color("#FFF");
  series.tooltip.getStrokeFromObject = true;
  series.tooltip.background.strokeWidth = 3;
  series.tooltip.getFillFromObject = false;
  series.fillOpacity = 0.6;
  series.strokeWidth = 2;
  series.stacked = true;

  let series2 = chart.series.push(new am4charts.LineSeries());
  series2.name = "Уул уурхайн идэвхжил дунд";
  series2.dataFields.dateX = "year";
  series2.dataFields.valueY = "medium";
  series2.tooltipHTML =
    "<img src='https://www.flaticon.com/svg/static/icons/svg/3103/3103558.svg' style='vertical-align:bottom; margin-right: 10px; width:32px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
  series2.tooltipText = "[#000]{valueY.value}[/]";
  series2.tooltip.background.fill = am4core.color("#FFF");
  series2.tooltip.getFillFromObject = false;
  series2.tooltip.getStrokeFromObject = true;
  series2.tooltip.background.strokeWidth = 3;
  series2.sequencedInterpolation = true;
  series2.fillOpacity = 0.6;
  series2.stacked = true;
  series2.strokeWidth = 2;

  let series3 = chart.series.push(new am4charts.LineSeries());
  series3.name = "Уул уурхайн идэвхжил бага";
  series3.dataFields.dateX = "year";
  series3.dataFields.valueY = "low";
  series3.tooltipHTML =
    "<img src='https://www.flaticon.com/svg/static/icons/svg/3103/3103554.svg' style='vertical-align:bottom; margin-right: 10px; width:32px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
  series3.tooltipText = "[#000]{valueY.value}[/]";
  series3.tooltip.background.fill = am4core.color("#FFF");
  series3.tooltip.getFillFromObject = false;
  series3.tooltip.getStrokeFromObject = true;
  series3.tooltip.background.strokeWidth = 3;
  series3.sequencedInterpolation = true;
  series3.fillOpacity = 0.6;
  series3.defaultState.transitionDuration = 1000;
  series3.stacked = true;
  series3.strokeWidth = 2;

  chart.cursor = new am4charts.XYCursor();
  chart.cursor.xAxis = dateAxis;
  chart.scrollbarX = new am4core.Scrollbar();

  // Add a legend
  chart.legend = new am4charts.Legend();
  chart.legend.position = "top";

  // axis ranges
  let range = dateAxis.axisRanges.create();
  range.date = new Date(2001, 0, 1);
  range.endDate = new Date(2003, 0, 1);
  range.axisFill.fill = chart.colors.getIndex(7);
  range.axisFill.fillOpacity = 0.2;

  range.label.text = "Fines for speeding increased";
  range.label.inside = true;
  range.label.rotation = 90;
  range.label.horizontalCenter = "right";
  range.label.verticalCenter = "bottom";

  let range2 = dateAxis.axisRanges.create();
  range2.date = new Date(2007, 0, 1);
  range2.grid.stroke = chart.colors.getIndex(7);
  range2.grid.strokeOpacity = 0.6;
  range2.grid.strokeDasharray = "5,2";

  range2.label.text = "Motorcycle fee introduced";
  range2.label.inside = true;
  range2.label.rotation = 90;
  range2.label.horizontalCenter = "right";
  range2.label.verticalCenter = "bottom";
  return (
    <div
      id="chartdivArea2"
      style={{
        color: "white",
        background: "white",
        height: "640px",
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    ></div>
  );
}
