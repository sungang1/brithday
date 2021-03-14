import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-vaild',
  templateUrl: './vaild.component.html',
  styleUrls: ['./vaild.component.css']
})
export class VaildComponent implements OnInit {
  isVisible = false;


  yName = "";
  mName = "";

  num = 3;

  constructor(private message: NzMessageService,private router:Router) { }

  ngOnInit(): void {
  }




  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }




  vaildName() {



    if (this.yName.trim() == "密文静"&&this.mName.trim() == "孙刚") {
    
     this.router.navigateByUrl("/text");

    }else if(this.yName.trim()==""){
      if (this.num <= 0) {
        alert("好吧，下次再接再励吧")
         return;
       } else
         if (this.num == 1) {
           this.message.error("还剩一次机会了，好好把握");
           this.num--;
           return;
         } else {
           this.message.error("你的名字忘了吗？,还有" + this.num + "次试错机会呀");
           this.num--;
           return;
         }



    }else if(this.yName.trim()==""){

      if (this.num <= 0) {
        alert("好吧，下次再接再励吧")
         return;
       } else
         if (this.num == 1) {
           this.message.error("还剩一次机会了，好好把握");
           this.num--;
           return;
         } else {
           this.message.error("是不是记不得我的名字了,还有" + this.num + "次试错机会呀");
           this.num--;
           return;
         }



    }else if(this.yName.trim()!=""&&this.yName.trim()!="密文静"){

      if (this.num <= 0) {
        alert("好吧，下次再接再励吧")
         return;
       } else
         if (this.num == 1) {
           this.message.error("还剩一次机会了，好好把握");
           this.num--;
           return;
         } else {
           this.message.error("你的名字填错了,还有" + this.num + "次试错机会呀");
           this.num--;
           return;
         }


    }else if(this.mName.trim()!=""&&this.mName.trim()!="孙刚"){

      if (this.num <= 0) {
        alert("好吧，下次再接再励吧")
         return;
       } else
         if (this.num == 1) {
           this.message.error("还剩一次机会了，好好把握");
           this.num--;
           return;
         } else {
           this.message.error("我的名字填错了,还有" + this.num + "次试错机会呀");
           this.num--;
           return;
         }


    }









 





  }




}
