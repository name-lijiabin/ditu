(function(){
    // 监控模块
var top1 = document.getElementsByClassName('top');
var show = document.getElementsByClassName('showtop');



for(var i = 0; i < top1.length; i++){
    top1[i].setAttribute('index',i)

    top1[i].onclick = function () {
        var index1 = this.getAttribute('index');
        for (var j = 0; j < top1.length; j++) {
            top1[j].classList.remove('qieh');
            top1[index1].classList.add('qieh');
        }

        for (var k = 0; k < show.length; k++) {
            show[k].style.display = 'none';
            show[index1].style.display = 'block';
        }
}
}
})();


(function () {
    var myChart = echarts.init(document.querySelector('.pie'));
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '老陈学员分布',
                type: 'pie',
                radius: ['10%', '65%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 4,
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 35, name: '河南' }
                ]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('load', function () {
        myChart.resize();
    });
    window.addEventListener('resize', function () {
        myChart.resize();
    })

})();


(function () {
    var item = {
        name: '',
        value: 1200,
        itemStyle: {
            color: '#254065'
        },
        tooltip: {
            extraCssText: 'opacity:0'
        }

    }
    var myChart = echarts.init(document.querySelector('.b'));
    var option = {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#00fffb' // 0% 处的颜色
            }, {
                offset: 1, color: '#0061ce' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },
        tooltip: {
            trigger: 'axis',
            // 触发的时候 效果  shadow 阴影
            //                line 虚线
            //                none 没效果
            axisPointer: {
                type: 'none'
            }
        },
        // 表格
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true,
            // 是否显示网格
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [
            {
                type: 'category',
                data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'], axisTick: {
                    alignWithLabel: false,
                    show: false
                },
                axisLabel: {
                    color: "#71f2fb"
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                    }
                }

            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#71f2fb"
                },
                splitLine: {
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('load', function () {
        myChart.resize()
    });
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();
(function () {
    var timTabs = document.getElementsByClassName('filter')[0].children;
    var orderData = document.getElementsByClassName('orderData');
    var index_ = 0;
    for (var i = 0; i < timTabs.length; i++) {
        timTabs[i].setAttribute('index', i)
        timTabs[i].onclick = function () {
            index_ = this.getAttribute('index');
            for (var k = 0; k < timTabs.length; k++) {
                timTabs[k].classList.remove('abc');
                timTabs[index_].classList.add('abc');
            }

            for (var j = 0; j < orderData.length; j++) {
                orderData[j].classList.add('orderDataHidden');
                orderData[index_].classList.remove('orderDataHidden');
            }
        }
    }
    var timer = null;
    function auto() {
        timer = setInterval(function () {
            index_++;
            if (index_ >= timTabs.length) {
                index_ = 0;
            }
            timTabs[index_].click();
        }, 1500)
    }
    auto();
    var order = document.querySelector('.order');
    // 移入停止
    order.onmouseenter = function () {
        clearInterval(timer);
    }
    order.onmouseleave = auto;
})();



(function () {
   
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    var myChart = echarts.init(document.querySelector('.sline'));
    var option = {
        tooltip: {
            trigger: 'axis',
            //直线指示器
            axisPointer: {
                type: 'line'
            }
        },
        color: ['#00f2f1', '#ed3f35'],
        legend: {
            data: ['预期销售额', '实际销售额'],
            right: '10%',
            textStyle: {
                color: "#4c9bfd"
            }
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            //显示边框
            show: true,
            borderColor: '#012f4a'// 边框颜色
            // borderColor: 'red'// 边框颜色
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        series: [
            {
                name: '预期销售额',
                data: data.year[0],
                type: 'line',
                stack: 'Total',
                smooth: true

            },
            {
                name: '实际销售额',
                data: data.year[1],
                type: 'line',
                stack: 'Total',
                smooth: true
            }
        ]
    };

    myChart.setOption(option);



    //点击切换 年 季度 月 日
    var timeTab = document.getElementsByClassName('time');



    for (var i = 0; i < timeTab.length; i++) {
        timeTab[i].setAttribute('index', i);
        timeTab[i].onclick = function () {
            index_ = this.getAttribute('index');
            for (var j = 0; j < timeTab.length; j++) {
                timeTab[j].classList.remove('active');
                timeTab[index_].classList.add('active');
            }
            // 获取自定义属性携带的时间
            var time = this.getAttribute('data-time');
            // console.log(time);
            // console.log(data[time]);  根据时间的数据
            // 修改图表1的数据
            option.series[0].data = data[time][0];
            // 修改图表2的数据
            option.series[1].data = data[time][1];

            //重新调用option
            myChart.setOption(option);

        }
    }

    // 自动切换
    var index_ = 0;
    var timer = setInterval(function () {
        index_++;
        if (index_ >= timeTab.length) {
            index_ = 0
        }
        timeTab[index_].click();
    }, 3000)

    // 鼠标经过 暂停
    var sales = document.querySelector('.xxr');
    sales.onmouseenter = function () {
        clearInterval(timer);
    }

    sales.onmouseleave = function () {
        timer = setInterval(function () {
            index_++;
            if (index_ >= timeTab.length) {
                index_ = 0
            }
            timeTab[index_].click();
        }, 3000)
    }

    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
    //页面加载完成 就让图标自动重置大小
    window.addEventListener("load", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();








