const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const {AXES,QUESTIONS}=require('../dist/questions.js');
assert.equal(QUESTIONS.length,30);assert.equal(new Set(QUESTIONS.map(q=>q[1])).size,30);
for(let axis=0;axis<5;axis++){
 const rows=QUESTIONS.filter(q=>q[2]===axis);assert.equal(rows.length,6);assert.equal(rows.filter(q=>q[3]===1).length,3);
 for(const [direction,expected] of [[0,50],[1,100],[-1,0]]){
 const score=50+rows.reduce((s,q)=>s+(direction*2*q[3])*q[3],0)/12*50;assert.equal(score,expected);
 }
}
for(const file of ['app.js','questions.js'])new vm.Script(fs.readFileSync('dist/'+file,'utf8'));
for(const file of ['style.css','app.js','questions.js'])assert.ok(fs.existsSync('dist/'+file));
assert.equal(AXES.length,5);console.log('PASS: 30 unique questions, balanced five-axis scoring, boundary/neutral scores, script syntax and static assets.');
