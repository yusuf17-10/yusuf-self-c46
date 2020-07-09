class TimeTable{
    constructor(){  
        this.input1 = createInput("subject");
        this.submit=createButton("submit");
        this.input2 = createInput("subject");
        this.input3 = createInput("subject");
        this.input4 = createInput("subject");
        this.input5 = createInput("subject");
        this.input6 = createInput("subject");
        this.input7 = createInput("subject"); 
        this.input8 = createInput("subject");
        this.input9 = createInput("subject");
        this.input10 = createInput("subject");
        this.input11 = createInput("subject");
        this.input12 = createInput("subject");
        this.input13 = createInput("subject");
        this.input14= createInput("subject");
        this.input15 = createInput("subject");
        this.input16 = createInput("subject");
        this.input17 = createInput("subject");
        this.input18 = createInput("subject");
        this.input19 = createInput("subject");
        this.input20 = createInput("subject");
        this.input21= createInput("subject");
        this.input22 = createInput("subject");
        this.input23 = createInput("subject");
        this.input24 = createInput("subject");
        this.input25 = createInput("subject");
        this.input26 = createInput("subject"); 
        this.input27 = createInput("subject");
        this.input28 = createInput("subject");
        this.input29 = createInput("subject");
        this.input30 = createInput("subject");
        this.input31 = createInput("subject");
        this.input32 = createInput("subject");
        this.input33= createInput("subject");
        this.input34 = createInput("subject");
        this.input35 = createInput("subject");
        this.input36 = createInput("subject");
        this.input37 = createInput("subject");
        this.input38 = createInput("subject");
        this.input39 = createInput("subject");
        this.input40= createInput("subject");
        this.input41= createInput("subject");
        this.input42 = createInput("subject");


       /* this.input43 = createInput("subject");
        this.input44 = createInput("subject");
        this.input45 = createInput("subject");
        this.input46 = createInput("subject");
        this.input47 = createInput("subject");
        this.input48 = createInput("subject");
        this.input49 = createInput("subject"); 
        this.input50 = createInput("subject");
        this.input51 = createInput("subject");
        this.input52 = createInput("subject");
        this.input53 = createInput("subject");
        this.input54 = createInput("subject");
        this.input55 = createInput("subject");
        this.input56= createInput("subject");
        this.input57 = createInput("subject");
        this.input58 = createInput("subject");
        this.input59 = createInput("subject");
        this.input60 = createInput("subject");
        this.input61 = createInput("subject");
        this.input62 = createInput("subject");
        this.input63= createInput("subject");
        this.input64 = createInput("subject");
        this.input65 = createInput("subject");
        this.input66 = createInput("subject");
        this.input67 = createInput("subject");
        this.input68 = createInput("subject"); 
        this.input69 = createInput("subject");
        this.input70 = createInput("subject");
        this.input71 = createInput("subject");
        this.input72 = createInput("subject");
        this.input73 = createInput("subject");
        this.input74 = createInput("subject");
        this.input75= createInput("subject");
        this.input76 = createInput("subject");
        this.input77 = createInput("subject");
        this.input78 = createInput("subject");
        this.input79 = createInput("subject");
        this.input80 = createInput("subject");
        this.input81 = createInput("subject");
        this.input82= createInput("subject");
        this.input83= createInput("subject");
        this.input84 = createInput("subject");*/


        
    
    }
    hide(){
        this.input1.hide();
        this.submit.hide();
        this.input2.hide();
        this.input3.hide();
        this.input4.hide();
        this.input5.hide();
        this.input6.hide();
        this.input7.hide();
        this.input8.hide();
        this.input9.hide();
        this.input10.hide();
        this.input11.hide();
        this.input12.hide();
        this.input13.hide();
        this.input14.hide();
        this.input15.hide();
        this.input16.hide();
        this.input17.hide();
        this.input18.hide();
        this.input19.hide();
        this.input20.hide();
        this.input21.hide();
        this.input22.hide();
        this.input23.hide();
        this.input24.hide();
        this.input25.hide();
        this.input26.hide();
        this.input27.hide();
        this.input28.hide();
        this.input29.hide();
        this.input30.hide();
        this.input31.hide();
        this.input32.hide();
        this.input33.hide();
        this.input34.hide();
        this.input35.hide();
        this.input36.hide();
        this.input37.hide();
        this.input38.hide();
        this.input39.hide();
        this.input40.hide();
        this.input41.hide();
        this.input42.hide();


       /* this.input43.hide();
        this.input44.hide();
        this.input45.hide();
        this.input46.hide();
        this.input47.hide();
        this.input48.hide();
        this.input49.hide();
        this.input50.hide();
        this.input51.hide();
        this.input52.hide();
        this.input53.hide();
        this.input54.hide();
        this.input55.hide();
        this.input56.hide();
        this.input57.hide();
        this.input58.hide();
        this.input59.hide();
        this.input60.hide();
        this.input61.hide();
        this.input62.hide();
        this.input63.hide();
        this.input64.hide();
        this.input65.hide();
        this.input66.hide();
        this.input67.hide();
        this.input68.hide();
        this.input69.hide();
        this.input70.hide();
        this.input71.hide();
        this.input72.hide();
        this.input73.hide();
        this.input74.hide();
        this.input75.hide();
        this.input76.hide();
        this.input77.hide();
        this.input78.hide();
        this.input79.hide();
        this.input80.hide();
        this.input81.hide();
        this.input82.hide();
        this.input83.hide();
        this.input84.hide();*/

    }
    display(){

    var monday=createElement("h4");
    var tuesday=createElement("h4");
    var wednesday=createElement("h4");
    var thursday=createElement("h4");
    var friday=createElement("h4");
    var saturday=createElement("h4");
    var sunday=createElement("h4");

    
    monday.html("Monday");
    tuesday.html("Tuesday");
    wednesday.html("Wednesday");
    thursday.html("Thursday");
    friday.html("Saturday");
    saturday.html("Friday");
    sunday.html("Sunday");
    
    monday.position(displayWidth/2-displayWidth/3,displayHeight/6);
    tuesday.position(displayWidth/2-displayWidth/3+150,displayHeight/6);
    wednesday.position(displayWidth/2-displayWidth/3+300,displayHeight/6);
    thursday.position(displayWidth/2,displayHeight/6);
    friday.position(displayWidth/2+displayWidth/3-150,displayHeight/6);
    saturday.position(displayWidth/2+displayWidth/3-300,displayHeight/6);
    sunday.position(displayWidth/2+displayWidth/3,displayHeight/6);

   var time1=createElement("h5");
   var time2=createElement("h5");
   var time3=createElement("h5");
   var time4=createElement("h5");
   var time5=createElement("h5");
   var time6=createElement("h5");
   var time7=createElement("h5");
   var time8=createElement("h5");
   var time9=createElement("h5");
   var time10=createElement("h5");
   var time11=createElement("h5");
   var time12=createElement("h5");
   var time13=createElement("h5");



    
    time1.html("5-6AM");
    time2.html("6-7AM");
    time3.html("7-8AM");
    time4.html("8-9AM");
    time5.html("9-10AM");
    time6.html("10-11AM");
    time7.html("11-12AM");
    time8.html("12-1PM");
    time9.html("1-2PM");
    time10.html("2-3PM");
    time11.html("3-4PM");
    time12.html("4-5PM");
    time13.html("5-6PM");

    time1.position(displayWidth/2-580,displayHeight/2-200);
    time2.position(displayWidth/2-580,displayHeight/2-130);
    time3.position(displayWidth/2-580,displayHeight/2-58);
    time4.position(displayWidth/2-580,displayHeight/1-390);
    time5.position(displayWidth/2-580,displayHeight/1-330);
    time6.position(displayWidth/2-580,displayHeight/1-260);
    time7.position(displayWidth/2-580,displayHeight/1-200);
    time8.position(displayWidth/2-580,displayHeight/1-150);
    time9.position(displayWidth/2-580,displayHeight/1-100);
    time10.position(displayWidth/2-580,displayHeight/1-50);
    time11.position(displayWidth/2-580,displayHeight/1-5);
    time12.position(displayWidth/2-580,displayHeight/1);
    time13.position(displayWidth/2-580,displayHeight/1);
    

    this.input1.position(displayWidth/2-displayWidth/3,displayHeight/4+10);
    this.input2.position(displayWidth/2-displayWidth/3+150,displayHeight/4+10);
    this.input3.position(displayWidth/2-displayWidth/3+300,displayHeight/4+10);
    this.input4.position(displayWidth/2,displayHeight/4+10);
    this.input5.position(displayWidth/2+displayWidth/3-100,displayHeight/4+10);
    this.input6.position(displayWidth/2+displayWidth/3-300,displayHeight/4+10);
    this.input7.position(displayWidth/2+displayWidth/3,displayHeight/4+10);

    this.input8.position(displayWidth/2-displayWidth/3,displayHeight/3+20);
    this.input9.position(displayWidth/2-displayWidth/3+150,displayHeight/3+20);
    this.input10.position(displayWidth/2-displayWidth/3+300,displayHeight/3+20);
    this.input11.position(displayWidth/2,displayHeight/3+20);
    this.input12.position(displayWidth/2+displayWidth/3-100,displayHeight/3+20);
    this.input13.position(displayWidth/2+displayWidth/3-300,displayHeight/3+20);
    this.input14.position(displayWidth/2+displayWidth/3,displayHeight/3+20);

    this.input15.position(displayWidth/2-displayWidth/3,displayHeight/3+90);
    this.input16.position(displayWidth/2-displayWidth/3+150,displayHeight/3+90);
    this.input17.position(displayWidth/2-displayWidth/3+300,displayHeight/3+90);
    this.input18.position(displayWidth/2,displayHeight/3+90);
    this.input19.position(displayWidth/2+displayWidth/3-100,displayHeight/3+90);
    this.input20.position(displayWidth/2+displayWidth/3-300,displayHeight/3+90);
    this.input21.position(displayWidth/2+displayWidth/3,displayHeight/3+90); 

    this.input22.position(displayWidth/2-displayWidth/3,displayHeight/3+200);
    this.input23.position(displayWidth/2-displayWidth/3+150,displayHeight/3+200);
    this.input24.position(displayWidth/2-displayWidth/3+300,displayHeight/3+200);
    this.input25.position(displayWidth/2,displayHeight/3+200);
    this.input26.position(displayWidth/2+displayWidth/3-100,displayHeight/3+200);
    this.input27.position(displayWidth/2+displayWidth/3-300,displayHeight/3+200);
    this.input28.position(displayWidth/2+displayWidth/3,displayHeight/3+200);
    
    this.input29.position(displayWidth/2-displayWidth/3,displayHeight/3+140);
    this.input30.position(displayWidth/2-displayWidth/3+150,displayHeight/3+140);
    this.input31.position(displayWidth/2-displayWidth/3+300,displayHeight/3+140);
    this.input32.position(displayWidth/2,displayHeight/3+140);
    this.input33.position(displayWidth/2+displayWidth/3-100,displayHeight/3+140);
    this.input34.position(displayWidth/2+displayWidth/3-300,displayHeight/3+140);
    this.input35.position(displayWidth/2+displayWidth/3,displayHeight/3+140);

    this.input36.position(displayWidth/1-1180,displayHeight/1-900);
    this.input37.position(displayWidth/1-1010,displayHeight/1-900);
    this.input38.position(displayWidth/1-880,displayHeight/1-900);
    this.input39.position(displayWidth/1-720,displayHeight/1-900);
    this.input40.position(displayWidth/1-580,displayHeight/1-900);
    this.input41.position(displayWidth/1-420,displayHeight/1-900);
    this.input42.position(displayWidth/1-280,displayHeight/1-900);


    this.input1.show();
    this.input2.show();
    this.input3.show();
    this.input4.show();
    this.input5.show();
    this.input6.show();
    this.input7.show();
    this.input8.show();
    this.input9.show();
    this.input10.show();
    this.input11.show();
    this.input12.show();
    this.input13.show();
    this.input14.show();
    this.input15.show();
    this.input16.show();
    this.input17.show();
    this.input18.show();
    this.input19.show();
    this.input20.show();
    this.input21.show();
    this.input22.show();
    this.input23.show();
    this.input24.show();
    this.input25.show();
    this.input26.show();
    this.input27.show();
    this.input28.show();
    this.input29.show();
    this.input30.show();
    this.input31.show();
    this.input32.show();
    this.input33.show();
    this.input34.show();
    this.input35.show();
    this.input36.show();
    this.input37.show();
    this.input38.show();
    this.input39.show();
    this.input40.show();
    this.input41.show();
    this.input42.show();
    
  /*  this.input43.show();
    this.input44.show();
    this.input45.show();
    this.input46.show();
    this.input47.show();
    this.input48.show();
    this.input49.show();
    this.input50.show();
    this.input51.show();
    this.input53.show();
    this.input54.show();
    this.input55.show();
    this.input56.show();
    this.input57.show();
    this.input58.show();
    this.input59.show();
    this.input60.show();
    this.input61.show();
    this.input62.show();
    this.input63.show();
    this.input64.show();
    this.input65.show();
    this.input66.show();
    this.input67.show();
    this.input68.show();
    this.input69.show();
    this.input70.show();
    this.input71.show();
    this.input72.show();
    this.input73.show();
    this.input74.show();
    this.input75.show();
    this.input76.show();
    this.input77.show();
    this.input78.show();
    this.input79.show();
    this.input80.show();
    this.input81.show();
    this.input82.show();
    this.input83.show();
    this.input84.show();*/





        this.submit.show();

        this.submit.position(400,displayHeight-200);

        this.submit.mousePressed(()=>{

            user.answers.push(this.input1.value(),this.input2.value(),this.input3.value(),this.input4.value(),this.input5.value(),this.input6.value(),this.input7.value());
            
            user.answers.push(this.input8.value(),this.input9.value(),this.input10.value(),this.input11.value(),this.input12.value(),this.input13.value(),this.input14.value());

            user.answers.push(this.input15.value(),this.input16.value(),this.input17.value(),this.input18.value(),this.input19.value(),this.input20.value(),this.input21.value());

            user.answers.push(this.input22.value(),this.input23.value(),this.input24.value(),this.input25.value(),this.input26.value(),this.input27.value(),this.input28.value());

            user.answers.push(this.input29.value(),this.input30.value(),this.input31.value(),this.input32.value(),this.input33.value(),this.input34.value(),this.input35.value());

            user.answers.push(this.input36.value(),this.input37.value(),this.input38.value(),this.input39.value(),this.input40.value(),this.input41.value(),this.input42.value());

            user.update();
           
            

            console.log(user.answers);

           gameState=2;
        })
        
    }
} 
