function computation(){
	let a=document.variable.aa.value;
	let b=document.variable.bb.value;
	let c=document.variable.cc.value;
	let d=document.variable.dd.value;
	let amin=document.variable.am.value;
	let bmin=document.variable.bm.value;
	let cmin=document.variable.cm.value;
	let dmin=document.variable.dm.value;
	
		const r=6371;
		const p=Math.PI;
		let a0=a-(-amin/60);
		let b0=b-(-bmin/60);
		let c0=c-(-cmin/60);
		let d0=d-(-dmin/60);
		let e1=90-b0;
		let f1=90-a0;
		let e2=e1*p/180;
		let f2=f1*p/180;
		let lambda1=d0-c0;
		let lambda2=lambda1*p/180;
		let c1=Math.cos(e2)*Math.cos(f2)+Math.sin(e2)*Math.sin(f2)*Math.cos(lambda2);
		let c2=Math.acos(c1);
		let c3=c2*180/p;
		
		let v=c3*r*p/180;

	document.variable.result.value=v;
}
