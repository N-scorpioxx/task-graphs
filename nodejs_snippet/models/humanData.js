const { Timestamp } = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var instanceObj = new Schema({
    pos_x:  {
        type: Number,
    },
    pos_y:{
       type:Number
    },
    vel_x:{
        type:Number
     },
     vel_y:{
        type:Number
     },
     confidence:{
        type:0
      }//,
   //   sensors:{
   //      type:Array
   //   }
});

var humanData = new Schema({ 
    instances:[instanceObj],
    timestamp:{
        type:String
    }
});

var human_exp = mongoose.model('humanData', humanData);

module.exports = human_exp;