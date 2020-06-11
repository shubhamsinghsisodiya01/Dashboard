// npm install jquery --save
// import * as $ from 'jquery';
// npm install @types/jquery@2.0.47

// import * as $ from 'jquery';
// import * as Highcharts from './highcharts';
var chart1;
// $(document).ready();

function minimize(){ //ready 
  $(".sideMenuToggler").on("click", function() { //onclick
      $(".wrapper").toggleClass("active"); //wrapper
    });
      var adjustSidebar = function() {
      // $(".sidebar").slimScroll({     //slimscroll is still not working
      //   height: document.documentElement.clientHeight - $(".navbar").outerHeight() //navbar
      // });
    };
    adjustSidebar();
    $(window).resize(function() {     //resize function
      adjustSidebar();
    });
  }

$(window).ready(call_me);
function call_me() {
  load_chart_1();

}

function getData(device) {
  let point = [],
  power = 0;
  $.ajax({
    type: 'GET',
    url :'http://127.0.0.1:8000/details',
    dataType:'text json',
    async:false,
    success: function(response){
      point = [["2109-10-11 12:00:00",567],["2109-10-11",566]]
       function loadData(response){
        const final = response.map(item =>{
          const newArray = []
          if(device=='chart1'){
            power = parseInt(item.load1)
          }
          else if(device=='mixer'){
            power = parseInt(item.load2)
          }
          else if(device=='oven'){
            power = parseInt(item.load3)
          }
          else if(device=='chiller'){
            power = parseInt(item.load4)
          }
          newArray.push(item.date)
          newArray.push(power)

          return newArray
        })
        return final
        }
        point = loadData(response)
        point = point.slice(0,10)
    },
    error:function(error){
        
        console.log("error",Error)
        point =  []
    }
  })
  return point;
}
function load_chart_1() {
  chart1 =  {
    chart: {
      scrollablePlotArea: {
        minWidth: 700,
      },
      backgroundColor:'transparent'
    },

    // data: {
      
    //   csvURL: window.location.origin + "/assets/csv/chart-1-data.csv",
    //   beforeParse: function(csv) {
    //     
    //     console.log(csv.replace(/\n\n/g, "\n"))
    //     return csv.replace(/\n\n/g, "\n");
    //   }
      
    // },
    title: {
      text: ""
    },

    xAxis: {
      type: 'datetime',
      labels: {
        hour: '%I %p',
        minute: '%I:%M %p' 
      }
  },
    yAxis: [
      {
        // left y axis
        title: {
          text: null
        },
        labels: {
          align: "left",
          x: 3,
          y: 16,
          format: "{value:.,0f}"
        },
        showFirstLabel: false
      },
      {
        // right y axis
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
          text: null
        },
        labels: {
          align: "right",
          x: -3,
          y: 16,
          format: "{value:.,0f}"
        },
        showFirstLabel: false
      }
    ],
    credits: {
      enabled: false
  },
  exporting: {
    enabled: false
  },
    legend: {
      align: "left",
      verticalAlign: "top",
      borderWidth: 0
    },
    tooltip: {
      shared: true,
      crosshairs: true
    },
    plotOptions: {
      series: {
        cursor: "pointer",
        point: {
          events: {
            // click: function(e) {
            //   hs.htmlExpand(null, {
            //     pageOrigin: {
            //       x: e.pageX || e.clientX,
            //       y: e.pageY || e.clientY
            //     },
            //     headingText: this.series.name,
            //     maincontentText:
            //       Superpower.dateFormat("%A, %b %e, %Y", this.x) +
            //       ":<br/> " +
            //       this.y +
            //       " sessions",
            //     width: 200
            //   });
            // }
          }
        },
        marker: {
          lineWidth: 1
        }
      }
    },
    series: [
      {
        name: "All sessions",
        lineWidth: 4,
        data: getData('chart1'),
        marker: {
          radius: 4
        }
      },
      {
        name: "New users"
      }
    ]
  };
  Highcharts.chart("chart-container-1",chart1)
}
//  Consumption
Highcharts.chart('container6', {
  chart: {
      type: 'gauge',
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      title: false,
      backgroundColor:'transparent',
  },
  title: {
     text: null,
  },
  exporting: {
    enabled: false
  },
  credits: {
      enabled: false
  },
  pane: {
      startAngle: -150,
      endAngle: 150,
      background: [{
          backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                  [0, '#FFF'],
                  [1, '#333']
              ]
          },
          borderWidth: 0,
          outerRadius: '109%'
      }, {
          backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                  [0, '#333'],
                  [1, '#FFF']
              ]
          },
          borderWidth: 1,
          outerRadius: '107%'
      }, {
          // default background
      }, {
          backgroundColor: 'grey',
          borderWidth: 0,
          outerRadius: '105%',
          innerRadius: '103%'
      }]
  },
  // the value axis
  yAxis: {
      min: 0,
      max: 20,
      minorTickInterval: 'auto',
      minorTickWidth: 1,
      minorTickLength: 10,
      minorTickPosition: 'inside',
      minorTickColor: '#666',
      tickPixelInterval: 30,
      tickWidth: 2,
      tickPosition: 'inside',
      tickLength: 10,
      tickColor: '#666',
      labels: {
          step: 2,
          rotation: 'auto'
      },
      title: {
          text: 'kW/h'
      },
      plotBands: [{
          from: 0,
          to: 15,
          color: '#55BF3B' // green
      },  {
          from: 15,
          to: 18,
          color: '#DDDF0D' // yellow
      }, {
          from:18,
          to:20,
          color: '#DF5353' //red
      }]
  },
  series: [{
      name: 'Speed',
      data: [10],
      tooltip: {
          valueSuffix: 'Wh'
      }
  }]
},
// Add some life
function (chart) {
  if (!chart.renderer.forExport) {
      setInterval(function () {
          var point = chart.series[0].points[0],
              newVal,
              inc = Math.round((Math.random() - 0.5) * 20);
          newVal = point.y + inc;
          if (newVal < 0 || newVal > 20) {
              newVal = point.y - inc;
          }
          point.update(newVal);
      }, 3000);
  }
});

//mixer
Highcharts.chart('container2', {
  chart: {
      type: 'areaspline',
      backgroundColor: 'transparent',
  },
  title: {
      text: ''
  },
  exporting: {
    enabled: false
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: 150,
      y: 100,
      borderWidth: 0,
      floating: true,   
  },
  xAxis: {
      categories: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7'
      ],
      plotBands: [{ // visualize the weekend
          from: 0,
          to: 0,
      }],
      title: {
        text: 'Hours'
    }
  },
  yAxis: {
      title: {
          text: 'kWh'
      }
  },
//   xAxis: {
//     title: {
//         text: 'Hours'
//     }
// },
  tooltip: {
      shared: true,
      valueSuffix: ' kWh'
  },
  credits: {
      enabled: false
  },
  plotOptions: {
      areaspline: {
          fillOpacity: 0.5
      }
  },
  series: [{
      name: '',
      data: getData('mixer')
  }], 
});
// Oven
Highcharts.chart('container3', {
  chart: {
    backgroundColor: 'transparent',
      type: 'areaspline'
  },
  title: {
      text: ''
  },
  exporting: {
    enabled: false
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: 150,
      y: 100,
      borderWidth: 0,
      floating: true,
      
  },
  xAxis: {
      categories: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
      ],
      plotBands: [{ // visualize the weekend
          from: 0,
          to: 0,
          
      }],
      title: {
        text: 'Hours'
    }
  },
  yAxis: {
      title: {
          text: 'kWh'
      }
  },
//   xAxis: {
//     title: {
//         text: 'Hours'
//     }
// },
  tooltip: {
      shared: true,
      valueSuffix: ' kWh'
  },
  credits: {
      enabled: false
  },
  plotOptions: {
      areaspline: {
          fillOpacity: 0.5
      }
  },
  series: [{
      name: '',
      data: getData('oven')
  }], 
});
//chiller 1
Highcharts.chart('container4', {
  chart: {
    backgroundColor: 'transparent',
      type: 'areaspline'
  },
  title: {
      text: ''
  },
  exporting: {
    enabled: false
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: 150,
      y: 100,
      borderWidth: 0,
      floating: true,
  },
  xAxis: {
      categories: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7'
      ],
      plotBands: [{ // visualize the weekend
          from: 0,
          to: 0,       
      }],
      title: {
        text: 'Hours'
    }
  },
  yAxis: {
      title: {
          text: 'kWh'
      }
  },
//   xAxis: {
//     title: {
//         text: 'Hours'
//     }
// },
  tooltip: {
      shared: true,
      valueSuffix: ' kWh'
  },
  credits: {
      enabled: false
  },
  plotOptions: {
      areaspline: {
          fillOpacity: 0.5
      }
  },
  series: [{
      name: '',
      data: getData('chiller')
  }], 
});