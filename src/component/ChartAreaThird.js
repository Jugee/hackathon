import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default function ChartAreaThird() {
  /* Chart code */
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  let chart = am4core.create("chartdivArea3", am4charts.XYChart);

  chart.data = [
    {
      year: "2020",
      max: 203,
      medium: 203,
      low: 203,
    },
    {
      year: "2022",
      max: 226,
      medium: 226,
      low: 227,
    },
    {
      year: "2024",
      max: 250,
      medium: 255,
      low: 264,
    },
    {
      year: "2026",
      max: 259,
      medium: 272,
      low: 295,
    },
    {
      year: "2028",
      max: 251,
      medium: 274,
      low: 315,
    },
    {
      year: "2030",
      max: 232,
      medium: 263,
      low: 323,
    },
    {
      year: "2032",
      max: 208,
      medium: 245,
      low: 321,
    },
    {
      year: "2034",
      max: 185,
      medium: 225,
      low: 312,
    },
    {
      year: "2036",
      max: 164,
      medium: 205,
      low: 301,
    },
    {
      year: "2038",
      max: 145,
      medium: 187,
      low: 288,
    },
    {
      year: "2040",
      max: 130,
      medium: 171,
      low: 275,
    },
    {
      year: "2042",
      max: 117,
      medium: 157,
      low: 262,
    },
    {
      year: "2044",
      max: 106,
      medium: 146,
      low: 251,
    },
    {
      year: "2046",
      max: 97,
      medium: 136,
      low: 241,
    },
    {
      year: "2048",
      max: 90,
      medium: 127,
      low: 232,
    },
    {
      year: "2050",
      max: 84,
      medium: 120,
      low: 224,
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
      id="chartdivArea3"
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
