var heatmapData = [];
        d3.csv("Fartkontroller_sjaelland_6mdr.csv", function(dataIn) {
            //console.log(dataIn[0]["x"]);
            var dataset = dataIn;
            for (var key in dataset) {
                var x = dataset[key]["x"];
                var y = dataset[key]["y"];
                var size = dataset[key]["Bekræftelser"];
                heatmapData.push([x,y,size]);
         }
        })