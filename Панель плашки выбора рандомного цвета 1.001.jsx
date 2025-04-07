function mainScript(thisObj){
    function childScript(thisObj){
        var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Color Panel", undefined);
        
        //Тело вашего кода
         var group1 = myPanel.add("group{orientation:'column'}");
         var group2 = group1.add("group{orientation:'row'}");
         var group3 = group1.add("group{orientation:'row'}");
        
       button11 = group2 .add("button", undefined, "11");

          var Checkbox = group3.add("checkbox", undefined, "ColorPicker_AE");
          Checkbox.value = 1;

 ////////////////////////////////////////////////////    
         var projectName = "TransitionSC";
        var authorName = "eNNa_St";
         var ownFiles = Folder.userData.absoluteURI + "/" +authorName + "/" + projectName + "/";
         ///////////////////////////////

       button11.size = [20,20];
        button11.fillBrush = button11.graphics.newBrush (button11.graphics.BrushType.SOLID_COLOR, [253/255, 116/255,0/255, 1]);
/////////////////////////////////////////////////
        button11.onClick = function() { ColorSelRand()};  

         /////////////////////////////////
                  ///////////////////////////////////////////////
   var sectionName_4 ="ColorRandom" , keyName_4="valueColorRandom";
         colorMonoVal()
    /////////////////////////////////////////// 
   function ColorSelRand ()
       {

           /////////////////////////////////
          colorOldValueMono();
           
           if (Checkbox.value ==1){
        var externalLibrary = new ExternalObject("lib:"+ownFiles+"/ColorPicker_x64.aex");
       var oldColor = colorRand;
        var color1 = externalLibrary.colorPicker(oldColor, "dialog_title");
        if (color1 ==-1){
                color1 =oldColor
        }
    } else {
           var color1 = $.colorPicker ();}
       colorMemoryMono(color1)
          if (color1 !=-1) {
                var colVal1 = hexToRgb(color1); 
             }
            button11.fillBrush = button11.graphics.newBrush (button11.graphics.BrushType.SOLID_COLOR,(colVal1));
                colorMemoryMono()
           }
 ///////////////////////////////////    
         button11.onDraw =customDrawing;

         ///////////////////////////////////////////////
 function colorOldValueMono()
          {
            if (app.settings.haveSetting(sectionName_4, keyName_4)){
            colorRand =app.settings.getSetting(sectionName_4, keyName_4);
                } else {   
            colorRand  = 0x39869E;
                  }
          colorMemoryMono(colorRand)
          
           return colorRand;
           }
       /////////////////////////////////////////////////
              /////////////////////////////////////////////////
       
    function colorMonoVal()  
    {
        colorOldValueMono()
       var numColorRand =  Number(colorRand);
             var oldMonoRGGB =hexToRgb(numColorRand);
            button11.fillBrush = button11.graphics.newBrush (button11.graphics.BrushType.SOLID_COLOR,(oldMonoRGGB));
           }
       
       ///////////////////////////////////////////
       /////////////////////////////////////////////////
        function colorMemoryMono(colorMono)
        {
           app.settings.saveSetting(sectionName_4, keyName_4, colorMono); 
            }
        
        ///////////////////////////////   
         
        function customDrawing() {
                with (this){
                    graphics.drawOSControl();
                    graphics.rectPath(0,0, size[0], size[1]);
                    graphics.fillPath(fillBrush);
                    }           
           }
       
        
       
       function hexToRgb(hex){  
		if (typeof hex === 'string') hex = parseInt(hex, 16);  
		var r = (hex >> 16) & 0xFF;  
		var g = (hex >> 8 ) & 0xFF;  
		var b = (hex >> 0 ) & 0xFF;  
		return [r/255, g/255, b/255];  
	}

                        function RGBToHex(rgb) {
                      r = (rgb[0]*255).toString(16);
                      g = (rgb[1]*255).toString(16);
                      b =(rgb[2]*255).toString(16);

                      if (r.length == 1)
                        r = "0" + r;
                      if (g.length == 1)
                        g = "0" + g;
                      if (b.length == 1)
                        b = "0" + b;
                      return  r + g + b;
                   //   return "#" + r + g + b;
                    }
    
        //Конец кода
     
        
        myPanel.layout.layout(true);
        return myPanel;
        }
    
    var myChildScript = childScript(thisObj);
    if(myChildScript != null && myChildScript instanceof Window){
        myChildScript.center();
        myChildScript.show();
        }
    
    }
mainScript(this);