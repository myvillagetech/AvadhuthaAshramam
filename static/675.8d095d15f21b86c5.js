"use strict";(self.webpackChunkwebpage=self.webpackChunkwebpage||[]).push([[675],{675:(D,m,i)=>{i.r(m),i.d(m,{SinupModule:()=>z});var g=i(6895),s=i(433),u=i(6850),Z=i(3196),c=i(7759),e=i(8256),x=i(5097);let F=(()=>{class n{constructor(t){this.httpDataService=t}sinupUser(t){return this.httpDataService.post("auth/signup",t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(x.L))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function h(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1," please kindly fill field "),e.qZA())}function S(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1," minimum of 3 characters required "),e.qZA())}function T(n,l){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,h,2,0,"span",7),e.YNc(2,S,2,0,"span",7),e.qZA()),2&n){const t=e.oxw(2);let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=t.registerForm.get("name"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=t.registerForm.get("name"))||null==o.errors?null:o.errors.minlength)}}function P(n,l){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,T,3,2,"span",7),e.qZA()),2&n){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",(null==(r=t.registerForm.get("name"))?null:r.invalid)&&(null==(r=t.registerForm.get("name"))?null:r.touched)||(null==(r=t.registerForm.get("firstName"))?null:r.dirty))}}function w(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1," please provide valid mail Id "),e.qZA())}function v(n,l){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,w,2,0,"span",7),e.qZA()),2&n){const t=e.oxw(2);let r;e.xp6(1),e.Q6J("ngIf",null==t.registerForm||null==(r=t.registerForm.get("email"))?null:r.errors)}}function A(n,l){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,v,2,1,"span",7),e.qZA()),2&n){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",(null==t.registerForm||null==(r=t.registerForm.get("email"))?null:r.invalid)&&(null==t.registerForm||null==(r=t.registerForm.get("email"))?null:r.touched)||(null==t.registerForm||null==(r=t.registerForm.get("email"))?null:r.dirty))}}function C(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1," please kindly fill field "),e.qZA())}function q(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1," should not exceed 10 characters "),e.qZA())}function I(n,l){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,C,2,0,"span",7),e.YNc(2,q,2,0,"span",7),e.qZA()),2&n){const t=e.oxw(2);let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=t.registerForm.get("phone"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=t.registerForm.get("phone"))||null==o.errors?null:o.errors.maxlength)}}function N(n,l){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,I,3,2,"span",7),e.qZA()),2&n){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",(null==(r=t.registerForm.get("phone"))?null:r.invalid)&&(null==(r=t.registerForm.get("phone"))?null:r.touched)||(null==(r=t.registerForm.get("phone"))?null:r.dirty))}}function b(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1," please kindly fill field "),e.qZA())}function J(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1," Minimum eight characters are required "),e.qZA())}function y(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1," should containAt least one uppercase letter,At least one lowercase letter,At least one number,At least one special character "),e.qZA())}function U(n,l){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,b,2,0,"span",7),e.YNc(2,J,2,0,"span",7),e.YNc(3,y,2,0,"span",7),e.qZA()),2&n){const t=e.oxw(2);let r,o,a;e.xp6(1),e.Q6J("ngIf",null==t.registerForm||null==(r=t.registerForm.get("password"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.registerForm||null==(o=t.registerForm.get("password"))||null==o.errors?null:o.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==t.registerForm||null==(a=t.registerForm.get("password"))||null==a.errors?null:a.errors.pattern)}}function Y(n,l){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,U,4,3,"span",7),e.qZA()),2&n){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",(null==t.registerForm||null==(r=t.registerForm.get("password"))?null:r.invalid)&&(null==t.registerForm||null==(r=t.registerForm.get("password"))?null:r.touched)||(null==t.registerForm||null==(r=t.registerForm.get("password"))?null:r.dirty))}}function Q(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1," please kindly fill field "),e.qZA())}function M(n,l){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,Q,2,0,"span",7),e.qZA()),2&n){const t=e.oxw(2);let r;e.xp6(1),e.Q6J("ngIf",null==(r=t.registerForm.get("confirmPassword"))||null==r.errors?null:r.errors.invalid)}}function k(n,l){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,M,2,1,"span",7),e.qZA()),2&n){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",(null==(r=t.registerForm.get("confirmPassword"))?null:r.invalid)&&(null==(r=t.registerForm.get("confirmPassword"))?null:r.touched)||(null==(r=t.registerForm.get("confirmPassword"))?null:r.dirty))}}function E(n,l){1&n&&(e.TgZ(0,"div"),e._uU(1,"Passsword and Confirm Password didn't match. "),e.qZA())}function R(n,l){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,E,2,0,"div",7),e.qZA()),2&n){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",(null==(r=t.registerForm.get("password"))?null:r.value)!=(null==(r=t.registerForm.get("confirmPassword"))?null:r.value))}}const B=[{path:"",component:(()=>{class n{constructor(t,r,o){this.formBulder=t,this.sinupService=r,this.router=o}ngOnInit(){this.getRigisterFormDetails()}getRigisterFormDetails(){this.registerForm=this.formBulder.group({name:["",[s.kI.required,s.kI.minLength(3)]],email:["",[s.kI.required,s.kI.pattern(c.u.EmailPattern)]],phone:["",[s.kI.required,s.kI.maxLength(10)]],password:["",[s.kI.required,s.kI.pattern(c.u.PasswordPattern)]],confirmPassword:["",[s.kI.required]]})}onSubmit(){const{confirmPassword:t,...r}=this.registerForm.value;this.sinupService.sinupUser({...r,roles:["USER"]}).subscribe(o=>{console.log(o),this.router.navigate([Z.p.HOME])})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s.qu),e.Y36(F),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-signup-page"]],decls:34,vars:8,consts:[[1,"page"],[1,"container","my-4"],[1,"text-center"],[3,"formGroup","ngSubmit"],[1,"col-12","mb-3"],["for","name",1,"form-label"],["type","name","formControlName","name","id","name","placeholder","Enter  Name",1,"form-control"],[4,"ngIf"],["for","email",1,"form-label"],["type","email","formControlName","email","id","email","placeholder","name@example.com",1,"form-control"],["for","mobileNumber",1,"form-label"],["type","email","formControlName","phone","id","mobileNumber","placeholder","Enter Mobile Number",1,"form-control"],["for","password",1,"form-label"],["type","password","formControlName","password","id","password","placeholder","Enter password",1,"form-control"],["for","confirmPassword",1,"form-label"],["type","password","formControlName","confirmPassword","id","confirmPassword","placeholder","Enter password",1,"form-control"],["type","submit",1,"col-12","mb-3","btn","btn-primary","center",3,"disabled"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),e._uU(3,"Register"),e.qZA(),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(5,"div",4)(6,"label",5),e._uU(7,"Name"),e.qZA(),e._UZ(8,"input",6),e.YNc(9,P,2,1,"span",7),e.qZA(),e.TgZ(10,"div",4)(11,"label",8),e._uU(12,"Email address"),e.qZA(),e._UZ(13,"input",9),e.YNc(14,A,2,1,"span",7),e.qZA(),e.TgZ(15,"div")(16,"label",10),e._uU(17,"Mobile Number"),e.qZA(),e._UZ(18,"input",11),e.YNc(19,N,2,1,"span",7),e.qZA(),e.TgZ(20,"div",4)(21,"label",12),e._uU(22,"Password"),e.qZA(),e._UZ(23,"input",13),e.YNc(24,Y,2,1,"span",7),e.qZA(),e.TgZ(25,"div",4)(26,"label",14),e._uU(27,"Confirm Password"),e.qZA(),e._UZ(28,"input",15),e.YNc(29,k,2,1,"span",7),e.YNc(30,R,2,1,"span",7),e.qZA(),e.TgZ(31,"div",4)(32,"button",16),e._uU(33," Register "),e.qZA()()()()()),2&t){let o,a,_,f,d,p;e.xp6(4),e.Q6J("formGroup",r.registerForm),e.xp6(5),e.Q6J("ngIf",null==(o=r.registerForm.get("name"))?null:o.errors),e.xp6(5),e.Q6J("ngIf",null==r.registerForm||null==(a=r.registerForm.get("email"))?null:a.errors),e.xp6(5),e.Q6J("ngIf",null==(_=r.registerForm.get("phone"))?null:_.errors),e.xp6(5),e.Q6J("ngIf",null==r.registerForm||null==(f=r.registerForm.get("password"))?null:f.errors),e.xp6(5),e.Q6J("ngIf",null==(d=r.registerForm.get("confirmPassword"))?null:d.errors),e.xp6(1),e.Q6J("ngIf",(null==(p=r.registerForm.get("confirmPassword"))?null:p.invalid)&&(null==(p=r.registerForm.get("confirmPassword"))?null:p.touched)||(null==(p=r.registerForm.get("confirmPassword"))?null:p.dirty)),e.xp6(2),e.Q6J("disabled",!r.registerForm.valid)}},dependencies:[g.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]}),n})()}];let L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(B),u.Bz]}),n})(),z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.ez,s.u5,s.UX,L]}),n})()}}]);