(function() {
    var myChart = echarts.init(document.querySelector(".data"));
    var option = {
      tooltip: {
        show: true,
        position: ["60%", "10%"]
      },
      radar: {
        indicator: [
          { name: "商店", max: 100 },
          { name: "酒吧", max: 100 },
          { name: "网吧", max: 100 },
          { name: "高铁站", max: 100 },
          { name: "火车站", max: 100 }
        ],
        radius: "65%",
        shape: "circle",
        splitNumber: 4,
        name: {
          textStyle: {
            color: "#4c9bfd"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255, 0.5)"
          }
        },
        splitArea: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.5)"
          }
        }
      },
      series: [
        {
          name: "北京",
          type: "radar",
          lineStyle: {
            normal: {
              color: "#fff",
              width: 1,
              opacity: 0.5
            }
          },
          data: [[90, 19, 56, 11, 34]],
          symbol: "circle",
          symbolSize: 5,
          itemStyle: {
            color: "#fff"
          },

          label: {
            show: true,
            fontSize: 10
          },
          areaStyle: {
            color: "rgba(238, 197, 102, 0.6)"
          }
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
