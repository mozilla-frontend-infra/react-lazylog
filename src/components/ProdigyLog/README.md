Normal log viewing using a `url`:

```js

const text = `[32m==== Starting Training ====[0m
[35m[47m[0][0m {"text":"Uber\u2019s Lesson: Silicon Valley\u2019s Start-Up Machine Needs Fixing","meta":{"source":"The New York Times"},"_input_hash":1886699658,"_task_hash":-1952856502,"tokens":[{"text":"Uber","start":0,"end":4,"id":0},{"text":"\u2019s","start":4,"end":6,"id":1},{"text":"Lesson","start":7,"end":13,"id":2},{"text":":","start":13,"end":14,"id":3},{"text":"Silicon","start":15,"end":22,"id":4},{"text":"Valley","start":23,"end":29,"id":5},{"text":"\u2019s","start":29,"end":31,"id":6},{"text":"Start","start":32,"end":37,"id":7},{"text":"-","start":37,"end":38,"id":8},{"text":"Up","start":38,"end":40,"id":9},{"text":"Machine","start":41,"end":48,"id":10},{"text":"Needs","start":49,"end":54,"id":11},{"text":"Fixing","start":55,"end":61,"id":12}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":4,"token_start":0,"token_end":0,"label":"ORG"},{"start":15,"end":29,"token_start":4,"token_end":5,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: True
[35m[47m[1][0m {"text":"Pearl Automation, Founded by Apple Veterans, Shuts Down","meta":{"source":"The New York Times"},"_input_hash":1487477437,"_task_hash":-1298236362,"tokens":[{"text":"Pearl","start":0,"end":5,"id":0},{"text":"Automation","start":6,"end":16,"id":1},{"text":",","start":16,"end":17,"id":2},{"text":"Founded","start":18,"end":25,"id":3},{"text":"by","start":26,"end":28,"id":4},{"text":"Apple","start":29,"end":34,"id":5},{"text":"Veterans","start":35,"end":43,"id":6},{"text":",","start":43,"end":44,"id":7},{"text":"Shuts","start":45,"end":50,"id":8},{"text":"Down","start":51,"end":55,"id":9}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":16,"token_start":0,"token_end":1,"label":"ORG"},{"start":29,"end":34,"token_start":5,"token_end":5,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[2][0m {"text":"How Silicon Valley Pushed Coding Into American Classrooms","meta":{"source":"The New York Times"},"_input_hash":1842734674,"_task_hash":636683182,"tokens":[{"text":"How","start":0,"end":3,"id":0},{"text":"Silicon","start":4,"end":11,"id":1},{"text":"Valley","start":12,"end":18,"id":2},{"text":"Pushed","start":19,"end":25,"id":3},{"text":"Coding","start":26,"end":32,"id":4},{"text":"Into","start":33,"end":37,"id":5},{"text":"American","start":38,"end":46,"id":6},{"text":"Classrooms","start":47,"end":57,"id":7}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":4,"end":18,"token_start":1,"token_end":2,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[3][0m {"text":"Women in Tech Speak Frankly on Culture of Harassment","meta":{"source":"The New York Times"},"_input_hash":-487516519,"_task_hash":62119900,"tokens":[{"text":"Women","start":0,"end":5,"id":0},{"text":"in","start":6,"end":8,"id":1},{"text":"Tech","start":9,"end":13,"id":2},{"text":"Speak","start":14,"end":19,"id":3},{"text":"Frankly","start":20,"end":27,"id":4},{"text":"on","start":28,"end":30,"id":5},{"text":"Culture","start":31,"end":38,"id":6},{"text":"of","start":39,"end":41,"id":7},{"text":"Harassment","start":42,"end":52,"id":8}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[4][0m {"text":"Silicon Valley Investors Flexed Their Muscles in Uber Fight","meta":{"source":"The New York Times"},"_input_hash":10406310,"_task_hash":-1866130556,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"Investors","start":15,"end":24,"id":2},{"text":"Flexed","start":25,"end":31,"id":3},{"text":"Their","start":32,"end":37,"id":4},{"text":"Muscles","start":38,"end":45,"id":5},{"text":"in","start":46,"end":48,"id":6},{"text":"Uber","start":49,"end":53,"id":7},{"text":"Fight","start":54,"end":59,"id":8}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":14,"token_start":0,"token_end":1,"label":"LOCATION"},{"start":49,"end":53,"token_start":7,"token_end":7,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[5][0m {"text":"Uber is a Creature of an Industry Struggling to Grow Up","meta":{"source":"The New York Times"},"_input_hash":1394627333,"_task_hash":1124503579,"tokens":[{"text":"Uber","start":0,"end":4,"id":0},{"text":"is","start":5,"end":7,"id":1},{"text":"a","start":8,"end":9,"id":2},{"text":"Creature","start":10,"end":18,"id":3},{"text":"of","start":19,"end":21,"id":4},{"text":"an","start":22,"end":24,"id":5},{"text":"Industry","start":25,"end":33,"id":6},{"text":"Struggling","start":34,"end":44,"id":7},{"text":"to","start":45,"end":47,"id":8},{"text":"Grow","start":48,"end":52,"id":9},{"text":"Up","start":53,"end":55,"id":10}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":4,"token_start":0,"token_end":0,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[6][0m {"text":"\u2018The Internet Is Broken\u2019: @ev Is Trying to Salvage It","meta":{"source":"The New York Times"},"_input_hash":1569967905,"_task_hash":283929547,"tokens":[{"text":"\u2018","start":0,"end":1,"id":0},{"text":"The","start":1,"end":4,"id":1},{"text":"Internet","start":5,"end":13,"id":2},{"text":"Is","start":14,"end":16,"id":3},{"text":"Broken","start":17,"end":23,"id":4},{"text":"\u2019","start":23,"end":24,"id":5},{"text":":","start":24,"end":25,"id":6},{"text":"@ev","start":26,"end":29,"id":7},{"text":"Is","start":30,"end":32,"id":8},{"text":"Trying","start":33,"end":39,"id":9},{"text":"to","start":40,"end":42,"id":10},{"text":"Salvage","start":43,"end":50,"id":11},{"text":"It","start":51,"end":53,"id":12}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":24,"end":29,"token_start":6,"token_end":7,"label":"PERSON"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[7][0m {"text":"The South Park Commons Fills a Hole in the Tech Landscape","meta":{"source":"The New York Times"},"_input_hash":606673118,"_task_hash":851092169,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"South","start":4,"end":9,"id":1},{"text":"Park","start":10,"end":14,"id":2},{"text":"Commons","start":15,"end":22,"id":3},{"text":"Fills","start":23,"end":28,"id":4},{"text":"a","start":29,"end":30,"id":5},{"text":"Hole","start":31,"end":35,"id":6},{"text":"in","start":36,"end":38,"id":7},{"text":"the","start":39,"end":42,"id":8},{"text":"Tech","start":43,"end":47,"id":9},{"text":"Landscape","start":48,"end":57,"id":10}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":4,"end":14,"token_start":1,"token_end":2,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[8][0m {"text":"The Closing of the Republican Mind","meta":{"source":"The New York Times"},"_input_hash":339726228,"_task_hash":809538780,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Closing","start":4,"end":11,"id":1},{"text":"of","start":12,"end":14,"id":2},{"text":"the","start":15,"end":18,"id":3},{"text":"Republican","start":19,"end":29,"id":4},{"text":"Mind","start":30,"end":34,"id":5}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[9][0m {"text":"Writers From the Right and Left on Trump Jr., the Future of the F.B.I., Health Care and More","meta":{"source":"The New York Times"},"_input_hash":-584314991,"_task_hash":-1697033735,"tokens":[{"text":"Writers","start":0,"end":7,"id":0},{"text":"From","start":8,"end":12,"id":1},{"text":"the","start":13,"end":16,"id":2},{"text":"Right","start":17,"end":22,"id":3},{"text":"and","start":23,"end":26,"id":4},{"text":"Left","start":27,"end":31,"id":5},{"text":"on","start":32,"end":34,"id":6},{"text":"Trump","start":35,"end":40,"id":7},{"text":"Jr.","start":41,"end":44,"id":8},{"text":",","start":44,"end":45,"id":9},{"text":"the","start":46,"end":49,"id":10},{"text":"Future","start":50,"end":56,"id":11},{"text":"of","start":57,"end":59,"id":12},{"text":"the","start":60,"end":63,"id":13},{"text":"F.B.I.","start":64,"end":70,"id":14},{"text":",","start":70,"end":71,"id":15},{"text":"Health","start":72,"end":78,"id":16},{"text":"Care","start":79,"end":83,"id":17},{"text":"and","start":84,"end":87,"id":18},{"text":"More","start":88,"end":92,"id":19}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":35,"end":44,"token_start":7,"token_end":8,"label":"PERSON"},{"start":64,"end":70,"token_start":14,"token_end":14,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[10][0m {"text":"Daily Report: From Lean to Fat Start-Ups","meta":{"source":"The New York Times"},"_input_hash":1695701134,"_task_hash":-1434397680,"tokens":[{"text":"Daily","start":0,"end":5,"id":0},{"text":"Report","start":6,"end":12,"id":1},{"text":":","start":12,"end":13,"id":2},{"text":"From","start":14,"end":18,"id":3},{"text":"Lean","start":19,"end":23,"id":4},{"text":"to","start":24,"end":26,"id":5},{"text":"Fat","start":27,"end":30,"id":6},{"text":"Start","start":31,"end":36,"id":7},{"text":"-","start":36,"end":37,"id":8},{"text":"Ups","start":37,"end":40,"id":9}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[11][0m {"text":"How Uber\u2019s Chief Is Gaining Even More Clout in the Company","meta":{"source":"The New York Times"},"_input_hash":1775290536,"_task_hash":-2109786852,"tokens":[{"text":"How","start":0,"end":3,"id":0},{"text":"Uber","start":4,"end":8,"id":1},{"text":"\u2019s","start":8,"end":10,"id":2},{"text":"Chief","start":11,"end":16,"id":3},{"text":"Is","start":17,"end":19,"id":4},{"text":"Gaining","start":20,"end":27,"id":5},{"text":"Even","start":28,"end":32,"id":6},{"text":"More","start":33,"end":37,"id":7},{"text":"Clout","start":38,"end":43,"id":8},{"text":"in","start":44,"end":46,"id":9},{"text":"the","start":47,"end":50,"id":10},{"text":"Company","start":51,"end":58,"id":11}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":4,"end":8,"token_start":1,"token_end":1,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[12][0m {"text":"As New Zealand Courts Tech Talent, Isolation Becomes a Draw","meta":{"source":"The New York Times"},"_input_hash":-203619663,"_task_hash":-1678134031,"tokens":[{"text":"As","start":0,"end":2,"id":0},{"text":"New","start":3,"end":6,"id":1},{"text":"Zealand","start":7,"end":14,"id":2},{"text":"Courts","start":15,"end":21,"id":3},{"text":"Tech","start":22,"end":26,"id":4},{"text":"Talent","start":27,"end":33,"id":5},{"text":",","start":33,"end":34,"id":6},{"text":"Isolation","start":35,"end":44,"id":7},{"text":"Becomes","start":45,"end":52,"id":8},{"text":"a","start":53,"end":54,"id":9},{"text":"Draw","start":55,"end":59,"id":10}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":3,"end":14,"token_start":1,"token_end":2,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[13][0m {"text":"One Thing Silicon Valley Can\u2019t Seem to Fix","meta":{"source":"The New York Times"},"_input_hash":658479395,"_task_hash":-1314621772,"tokens":[{"text":"One","start":0,"end":3,"id":0},{"text":"Thing","start":4,"end":9,"id":1},{"text":"Silicon","start":10,"end":17,"id":2},{"text":"Valley","start":18,"end":24,"id":3},{"text":"Ca","start":25,"end":27,"id":4},{"text":"n\u2019t","start":27,"end":30,"id":5},{"text":"Seem","start":31,"end":35,"id":6},{"text":"to","start":36,"end":38,"id":7},{"text":"Fix","start":39,"end":42,"id":8}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":10,"end":24,"token_start":2,"token_end":3,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[14][0m {"text":"In Silicon Valley, a Voice of Caution Guides a High-Flying Uber","meta":{"source":"The New York Times"},"_input_hash":-1886037109,"_task_hash":327119938,"tokens":[{"text":"In","start":0,"end":2,"id":0},{"text":"Silicon","start":3,"end":10,"id":1},{"text":"Valley","start":11,"end":17,"id":2},{"text":",","start":17,"end":18,"id":3},{"text":"a","start":19,"end":20,"id":4},{"text":"Voice","start":21,"end":26,"id":5},{"text":"of","start":27,"end":29,"id":6},{"text":"Caution","start":30,"end":37,"id":7},{"text":"Guides","start":38,"end":44,"id":8},{"text":"a","start":45,"end":46,"id":9},{"text":"High","start":47,"end":51,"id":10},{"text":"-","start":51,"end":52,"id":11},{"text":"Flying","start":52,"end":58,"id":12},{"text":"Uber","start":59,"end":63,"id":13}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":3,"end":17,"token_start":1,"token_end":2,"label":"LOCATION"},{"start":59,"end":63,"token_start":13,"token_end":13,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[15][0m {"text":"Silicon Valley Writes a Protest Letter Against Trump","meta":{"source":"The New York Times"},"_input_hash":-1197520583,"_task_hash":1851046094,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"Writes","start":15,"end":21,"id":2},{"text":"a","start":22,"end":23,"id":3},{"text":"Protest","start":24,"end":31,"id":4},{"text":"Letter","start":32,"end":38,"id":5},{"text":"Against","start":39,"end":46,"id":6},{"text":"Trump","start":47,"end":52,"id":7}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":14,"token_start":0,"token_end":1,"label":"LOCATION"},{"start":47,"end":52,"token_start":7,"token_end":7,"label":"PERSON"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[16][0m {"text":"Warriors, Tech\u2019s Team, Are Soaring Out of Reach","meta":{"source":"The New York Times"},"_input_hash":455438235,"_task_hash":-538446270,"tokens":[{"text":"Warriors","start":0,"end":8,"id":0},{"text":",","start":8,"end":9,"id":1},{"text":"Tech","start":10,"end":14,"id":2},{"text":"\u2019s","start":14,"end":16,"id":3},{"text":"Team","start":17,"end":21,"id":4},{"text":",","start":21,"end":22,"id":5},{"text":"Are","start":23,"end":26,"id":6},{"text":"Soaring","start":27,"end":34,"id":7},{"text":"Out","start":35,"end":38,"id":8},{"text":"of","start":39,"end":41,"id":9},{"text":"Reach","start":42,"end":47,"id":10}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[17][0m {"text":"Silicon Valley\u2019s Most Elusive Beast","meta":{"source":"The New York Times"},"_input_hash":-254641250,"_task_hash":535165676,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"\u2019s","start":14,"end":16,"id":2},{"text":"Most","start":17,"end":21,"id":3},{"text":"Elusive","start":22,"end":29,"id":4},{"text":"Beast","start":30,"end":35,"id":5}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":14,"token_start":0,"token_end":1,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[18][0m {"text":"Wall Street and Silicon Valley Form an Uneasy Alliance","meta":{"source":"The New York Times"},"_input_hash":-650342506,"_task_hash":1197481475,"tokens":[{"text":"Wall","start":0,"end":4,"id":0},{"text":"Street","start":5,"end":11,"id":1},{"text":"and","start":12,"end":15,"id":2},{"text":"Silicon","start":16,"end":23,"id":3},{"text":"Valley","start":24,"end":30,"id":4},{"text":"Form","start":31,"end":35,"id":5},{"text":"an","start":36,"end":38,"id":6},{"text":"Uneasy","start":39,"end":45,"id":7},{"text":"Alliance","start":46,"end":54,"id":8}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":11,"token_start":0,"token_end":1,"label":"LOCATION"},{"start":16,"end":30,"token_start":3,"token_end":4,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[19][0m {"text":"Tim O'Reilly Explains the Internet of Things","meta":{"source":"The New York Times"},"_input_hash":1960221200,"_task_hash":-1054681509,"tokens":[{"text":"Tim","start":0,"end":3,"id":0},{"text":"O'Reilly","start":4,"end":12,"id":1},{"text":"Explains","start":13,"end":21,"id":2},{"text":"the","start":22,"end":25,"id":3},{"text":"Internet","start":26,"end":34,"id":4},{"text":"of","start":35,"end":37,"id":5},{"text":"Things","start":38,"end":44,"id":6}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":12,"token_start":0,"token_end":1,"label":"PERSON"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[20][0m {"text":"Alibaba I.P.O. May Unleash Global Fight Over Users","meta":{"source":"The New York Times"},"_input_hash":1141647274,"_task_hash":-1371783770,"tokens":[{"text":"Alibaba","start":0,"end":7,"id":0},{"text":"I.P.O.","start":8,"end":14,"id":1},{"text":"May","start":15,"end":18,"id":2},{"text":"Unleash","start":19,"end":26,"id":3},{"text":"Global","start":27,"end":33,"id":4},{"text":"Fight","start":34,"end":39,"id":5},{"text":"Over","start":40,"end":44,"id":6},{"text":"Users","start":45,"end":50,"id":7}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":7,"token_start":0,"token_end":0,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[21][0m {"text":"Disruptions: Looking Beyond Silicon Valley's Bubble","meta":{"source":"The New York Times"},"_input_hash":6052733,"_task_hash":-426216230,"tokens":[{"text":"Disruptions","start":0,"end":11,"id":0},{"text":":","start":11,"end":12,"id":1},{"text":"Looking","start":13,"end":20,"id":2},{"text":"Beyond","start":21,"end":27,"id":3},{"text":"Silicon","start":28,"end":35,"id":4},{"text":"Valley","start":36,"end":42,"id":5},{"text":"'s","start":42,"end":44,"id":6},{"text":"Bubble","start":45,"end":51,"id":7}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":28,"end":42,"token_start":4,"token_end":5,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[22][0m {"text":"Twitter Outages Linked to Glitches and Site Upgrade","meta":{"source":"The New York Times"},"_input_hash":339983989,"_task_hash":1014789995,"tokens":[{"text":"Twitter","start":0,"end":7,"id":0},{"text":"Outages","start":8,"end":15,"id":1},{"text":"Linked","start":16,"end":22,"id":2},{"text":"to","start":23,"end":25,"id":3},{"text":"Glitches","start":26,"end":34,"id":4},{"text":"and","start":35,"end":38,"id":5},{"text":"Site","start":39,"end":43,"id":6},{"text":"Upgrade","start":44,"end":51,"id":7}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":7,"token_start":0,"token_end":0,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[23][0m {"text":"Out of the Loop in Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":-69702229,"_task_hash":-1322295060,"tokens":[{"text":"Out","start":0,"end":3,"id":0},{"text":"of","start":4,"end":6,"id":1},{"text":"the","start":7,"end":10,"id":2},{"text":"Loop","start":11,"end":15,"id":3},{"text":"in","start":16,"end":18,"id":4},{"text":"Silicon","start":19,"end":26,"id":5},{"text":"Valley","start":27,"end":33,"id":6}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":19,"end":33,"token_start":5,"token_end":6,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[24][0m {"text":"A Determined Outpost of Tiny Technology","meta":{"source":"The New York Times"},"_input_hash":-1031138807,"_task_hash":-1902223821,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Determined","start":2,"end":12,"id":1},{"text":"Outpost","start":13,"end":20,"id":2},{"text":"of","start":21,"end":23,"id":3},{"text":"Tiny","start":24,"end":28,"id":4},{"text":"Technology","start":29,"end":39,"id":5}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[25][0m {"text":"In Silicon Valley, Recruiters Are Sending Out Their Own R\u00e9sum\u00e9s","meta":{"source":"The New York Times"},"_input_hash":-1136638232,"_task_hash":-764424012,"tokens":[{"text":"In","start":0,"end":2,"id":0},{"text":"Silicon","start":3,"end":10,"id":1},{"text":"Valley","start":11,"end":17,"id":2},{"text":",","start":17,"end":18,"id":3},{"text":"Recruiters","start":19,"end":29,"id":4},{"text":"Are","start":30,"end":33,"id":5},{"text":"Sending","start":34,"end":41,"id":6},{"text":"Out","start":42,"end":45,"id":7},{"text":"Their","start":46,"end":51,"id":8},{"text":"Own","start":52,"end":55,"id":9},{"text":"R\u00e9sum\u00e9s","start":56,"end":63,"id":10}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":3,"end":17,"token_start":1,"token_end":2,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[26][0m {"text":"Credit Crisis Spreads a Pall Over Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":567125300,"_task_hash":750000140,"tokens":[{"text":"Credit","start":0,"end":6,"id":0},{"text":"Crisis","start":7,"end":13,"id":1},{"text":"Spreads","start":14,"end":21,"id":2},{"text":"a","start":22,"end":23,"id":3},{"text":"Pall","start":24,"end":28,"id":4},{"text":"Over","start":29,"end":33,"id":5},{"text":"Silicon","start":34,"end":41,"id":6},{"text":"Valley","start":42,"end":48,"id":7}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":34,"end":48,"token_start":6,"token_end":7,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[27][0m {"text":"As Department Stores Close, Stitch Fix Expands Online","meta":{"source":"The New York Times"},"_input_hash":-645513532,"_task_hash":-121502673,"tokens":[{"text":"As","start":0,"end":2,"id":0},{"text":"Department","start":3,"end":13,"id":1},{"text":"Stores","start":14,"end":20,"id":2},{"text":"Close","start":21,"end":26,"id":3},{"text":",","start":26,"end":27,"id":4},{"text":"Stitch","start":28,"end":34,"id":5},{"text":"Fix","start":35,"end":38,"id":6},{"text":"Expands","start":39,"end":46,"id":7},{"text":"Online","start":47,"end":53,"id":8}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":28,"end":38,"token_start":5,"token_end":6,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[28][0m {"text":"Tech Incubators on a Mission of Diversity","meta":{"source":"The New York Times"},"_input_hash":-1263849831,"_task_hash":-2111185538,"tokens":[{"text":"Tech","start":0,"end":4,"id":0},{"text":"Incubators","start":5,"end":15,"id":1},{"text":"on","start":16,"end":18,"id":2},{"text":"a","start":19,"end":20,"id":3},{"text":"Mission","start":21,"end":28,"id":4},{"text":"of","start":29,"end":31,"id":5},{"text":"Diversity","start":32,"end":41,"id":6}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[29][0m {"text":"Meal-Delivery Start-Ups Take Aim at Your Dinner","meta":{"source":"The New York Times"},"_input_hash":2049046381,"_task_hash":-979269976,"tokens":[{"text":"Meal","start":0,"end":4,"id":0},{"text":"-","start":4,"end":5,"id":1},{"text":"Delivery","start":5,"end":13,"id":2},{"text":"Start","start":14,"end":19,"id":3},{"text":"-","start":19,"end":20,"id":4},{"text":"Ups","start":20,"end":23,"id":5},{"text":"Take","start":24,"end":28,"id":6},{"text":"Aim","start":29,"end":32,"id":7},{"text":"at","start":33,"end":35,"id":8},{"text":"Your","start":36,"end":40,"id":9},{"text":"Dinner","start":41,"end":47,"id":10}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[30][0m {"text":"If a Bubble Bursts in Palo Alto, Does It Make a Sound?","meta":{"source":"The New York Times"},"_input_hash":-1141457848,"_task_hash":1225751504,"tokens":[{"text":"If","start":0,"end":2,"id":0},{"text":"a","start":3,"end":4,"id":1},{"text":"Bubble","start":5,"end":11,"id":2},{"text":"Bursts","start":12,"end":18,"id":3},{"text":"in","start":19,"end":21,"id":4},{"text":"Palo","start":22,"end":26,"id":5},{"text":"Alto","start":27,"end":31,"id":6},{"text":",","start":31,"end":32,"id":7},{"text":"Does","start":33,"end":37,"id":8},{"text":"It","start":38,"end":40,"id":9},{"text":"Make","start":41,"end":45,"id":10},{"text":"a","start":46,"end":47,"id":11},{"text":"Sound","start":48,"end":53,"id":12},{"text":"?","start":53,"end":54,"id":13}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":22,"end":31,"token_start":5,"token_end":6,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[31][0m {"text":"Web\u2019s Reach Binds N.S.A. and Silicon Valley Leaders","meta":{"source":"The New York Times"},"_input_hash":-1520249529,"_task_hash":845166055,"tokens":[{"text":"Web","start":0,"end":3,"id":0},{"text":"\u2019s","start":3,"end":5,"id":1},{"text":"Reach","start":6,"end":11,"id":2},{"text":"Binds","start":12,"end":17,"id":3},{"text":"N.S.A.","start":18,"end":24,"id":4},{"text":"and","start":25,"end":28,"id":5},{"text":"Silicon","start":29,"end":36,"id":6},{"text":"Valley","start":37,"end":43,"id":7},{"text":"Leaders","start":44,"end":51,"id":8}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":18,"end":24,"token_start":4,"token_end":4,"label":"ORG"},{"start":29,"end":43,"token_start":6,"token_end":7,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: True
[35m[47m[32][0m {"text":"Daily Report: Other Nations Offer Visas to Compete With Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":-1089615761,"_task_hash":1304353774,"tokens":[{"text":"Daily","start":0,"end":5,"id":0},{"text":"Report","start":6,"end":12,"id":1},{"text":":","start":12,"end":13,"id":2},{"text":"Other","start":14,"end":19,"id":3},{"text":"Nations","start":20,"end":27,"id":4},{"text":"Offer","start":28,"end":33,"id":5},{"text":"Visas","start":34,"end":39,"id":6},{"text":"to","start":40,"end":42,"id":7},{"text":"Compete","start":43,"end":50,"id":8},{"text":"With","start":51,"end":55,"id":9},{"text":"Silicon","start":56,"end":63,"id":10},{"text":"Valley","start":64,"end":70,"id":11}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":56,"end":70,"token_start":10,"token_end":11,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[33][0m {"text":"Bill Maher Concert Will Introduce New Yahoo! Comedy Channel","meta":{"source":"The New York Times"},"_input_hash":806596880,"_task_hash":-940946460,"tokens":[{"text":"Bill","start":0,"end":4,"id":0},{"text":"Maher","start":5,"end":10,"id":1},{"text":"Concert","start":11,"end":18,"id":2},{"text":"Will","start":19,"end":23,"id":3},{"text":"Introduce","start":24,"end":33,"id":4},{"text":"New","start":34,"end":37,"id":5},{"text":"Yahoo","start":38,"end":43,"id":6},{"text":"!","start":43,"end":44,"id":7},{"text":"Comedy","start":45,"end":51,"id":8},{"text":"Channel","start":52,"end":59,"id":9}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":10,"token_start":0,"token_end":1,"label":"PERSON"},{"start":38,"end":44,"token_start":6,"token_end":7,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[34][0m {"text":"A Silicon Valley Dream Grows in Guatemala, Despite the Risks","meta":{"source":"The New York Times"},"_input_hash":-387149264,"_task_hash":-1486760505,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Silicon","start":2,"end":9,"id":1},{"text":"Valley","start":10,"end":16,"id":2},{"text":"Dream","start":17,"end":22,"id":3},{"text":"Grows","start":23,"end":28,"id":4},{"text":"in","start":29,"end":31,"id":5},{"text":"Guatemala","start":32,"end":41,"id":6},{"text":",","start":41,"end":42,"id":7},{"text":"Despite","start":43,"end":50,"id":8},{"text":"the","start":51,"end":54,"id":9},{"text":"Risks","start":55,"end":60,"id":10}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":2,"end":16,"token_start":1,"token_end":2,"label":"LOCATION"},{"start":32,"end":41,"token_start":6,"token_end":6,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[35][0m {"text":"One Country, Two Revolutions","meta":{"source":"The New York Times"},"_input_hash":-470673321,"_task_hash":281579531,"tokens":[{"text":"One","start":0,"end":3,"id":0},{"text":"Country","start":4,"end":11,"id":1},{"text":",","start":11,"end":12,"id":2},{"text":"Two","start":13,"end":16,"id":3},{"text":"Revolutions","start":17,"end":28,"id":4}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[36][0m {"text":"The Class That Built Apps, and Fortunes","meta":{"source":"The New York Times"},"_input_hash":753866161,"_task_hash":-1403851557,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Class","start":4,"end":9,"id":1},{"text":"That","start":10,"end":14,"id":2},{"text":"Built","start":15,"end":20,"id":3},{"text":"Apps","start":21,"end":25,"id":4},{"text":",","start":25,"end":26,"id":5},{"text":"and","start":27,"end":30,"id":6},{"text":"Fortunes","start":31,"end":39,"id":7}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[37][0m {"text":"E-Ties That Bind","meta":{"source":"The New York Times"},"_input_hash":-2055399520,"_task_hash":1048076915,"tokens":[{"text":"E","start":0,"end":1,"id":0},{"text":"-","start":1,"end":2,"id":1},{"text":"Ties","start":2,"end":6,"id":2},{"text":"That","start":7,"end":11,"id":3},{"text":"Bind","start":12,"end":16,"id":4}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[38][0m {"text":"Tech Recruiting Clashes With Immigration Rules","meta":{"source":"The New York Times"},"_input_hash":-1421518269,"_task_hash":1593806639,"tokens":[{"text":"Tech","start":0,"end":4,"id":0},{"text":"Recruiting","start":5,"end":15,"id":1},{"text":"Clashes","start":16,"end":23,"id":2},{"text":"With","start":24,"end":28,"id":3},{"text":"Immigration","start":29,"end":40,"id":4},{"text":"Rules","start":41,"end":46,"id":5}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[39][0m {"text":"On Day Care, Google Makes a Rare Fumble","meta":{"source":"The New York Times"},"_input_hash":114556414,"_task_hash":-1339936580,"tokens":[{"text":"On","start":0,"end":2,"id":0},{"text":"Day","start":3,"end":6,"id":1},{"text":"Care","start":7,"end":11,"id":2},{"text":",","start":11,"end":12,"id":3},{"text":"Google","start":13,"end":19,"id":4},{"text":"Makes","start":20,"end":25,"id":5},{"text":"a","start":26,"end":27,"id":6},{"text":"Rare","start":28,"end":32,"id":7},{"text":"Fumble","start":33,"end":39,"id":8}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":13,"end":19,"token_start":4,"token_end":4,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[40][0m {"text":"Where Computer Artifacts Come Alive","meta":{"source":"The New York Times"},"_input_hash":-1188284381,"_task_hash":-988980159,"tokens":[{"text":"Where","start":0,"end":5,"id":0},{"text":"Computer","start":6,"end":14,"id":1},{"text":"Artifacts","start":15,"end":24,"id":2},{"text":"Come","start":25,"end":29,"id":3},{"text":"Alive","start":30,"end":35,"id":4}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[41][0m {"text":"Can Green Make Green?","meta":{"source":"The New York Times"},"_input_hash":1841766548,"_task_hash":-677420145,"tokens":[{"text":"Can","start":0,"end":3,"id":0},{"text":"Green","start":4,"end":9,"id":1},{"text":"Make","start":10,"end":14,"id":2},{"text":"Green","start":15,"end":20,"id":3},{"text":"?","start":20,"end":21,"id":4}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[42][0m {"text":"In Silicon Valley, the Crash Seems Like Just Yesterday","meta":{"source":"The New York Times"},"_input_hash":1396382371,"_task_hash":-986519547,"tokens":[{"text":"In","start":0,"end":2,"id":0},{"text":"Silicon","start":3,"end":10,"id":1},{"text":"Valley","start":11,"end":17,"id":2},{"text":",","start":17,"end":18,"id":3},{"text":"the","start":19,"end":22,"id":4},{"text":"Crash","start":23,"end":28,"id":5},{"text":"Seems","start":29,"end":34,"id":6},{"text":"Like","start":35,"end":39,"id":7},{"text":"Just","start":40,"end":44,"id":8},{"text":"Yesterday","start":45,"end":54,"id":9}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":3,"end":17,"token_start":1,"token_end":2,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[43][0m {"text":"\u2018I\u2019m Here to Help,\u2019 Trump Tells Tech Executives at Meeting","meta":{"source":"The New York Times"},"_input_hash":-303465938,"_task_hash":-1985647881,"tokens":[{"text":"\u2018","start":0,"end":1,"id":0},{"text":"I","start":1,"end":2,"id":1},{"text":"\u2019m","start":2,"end":4,"id":2},{"text":"Here","start":5,"end":9,"id":3},{"text":"to","start":10,"end":12,"id":4},{"text":"Help","start":13,"end":17,"id":5},{"text":",","start":17,"end":18,"id":6},{"text":"\u2019","start":18,"end":19,"id":7},{"text":"Trump","start":20,"end":25,"id":8},{"text":"Tells","start":26,"end":31,"id":9},{"text":"Tech","start":32,"end":36,"id":10},{"text":"Executives","start":37,"end":47,"id":11},{"text":"at","start":48,"end":50,"id":12},{"text":"Meeting","start":51,"end":58,"id":13}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":20,"end":25,"token_start":8,"token_end":8,"label":"PERSON"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[44][0m {"text":"Peter Thiel\u2019s Bet on Donald Trump Pays Off","meta":{"source":"The New York Times"},"_input_hash":-1364972937,"_task_hash":64668636,"tokens":[{"text":"Peter","start":0,"end":5,"id":0},{"text":"Thiel","start":6,"end":11,"id":1},{"text":"\u2019s","start":11,"end":13,"id":2},{"text":"Bet","start":14,"end":17,"id":3},{"text":"on","start":18,"end":20,"id":4},{"text":"Donald","start":21,"end":27,"id":5},{"text":"Trump","start":28,"end":33,"id":6},{"text":"Pays","start":34,"end":38,"id":7},{"text":"Off","start":39,"end":42,"id":8}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":11,"token_start":0,"token_end":1,"label":"PERSON"},{"start":21,"end":33,"token_start":5,"token_end":6,"label":"PERSON"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[45][0m {"text":"Peter Thiel Defends His Most Contrarian Move Yet: Supporting Trump","meta":{"source":"The New York Times"},"_input_hash":-16738190,"_task_hash":-1642374033,"tokens":[{"text":"Peter","start":0,"end":5,"id":0},{"text":"Thiel","start":6,"end":11,"id":1},{"text":"Defends","start":12,"end":19,"id":2},{"text":"His","start":20,"end":23,"id":3},{"text":"Most","start":24,"end":28,"id":4},{"text":"Contrarian","start":29,"end":39,"id":5},{"text":"Move","start":40,"end":44,"id":6},{"text":"Yet","start":45,"end":48,"id":7},{"text":":","start":48,"end":49,"id":8},{"text":"Supporting","start":50,"end":60,"id":9},{"text":"Trump","start":61,"end":66,"id":10}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":11,"token_start":0,"token_end":1,"label":"PERSON"},{"start":61,"end":66,"token_start":10,"token_end":10,"label":"PERSON"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[46][0m {"text":"What It\u2019s Like to Fight Online Hate","meta":{"source":"The New York Times"},"_input_hash":-1590508031,"_task_hash":1468744841,"tokens":[{"text":"What","start":0,"end":4,"id":0},{"text":"It","start":5,"end":7,"id":1},{"text":"\u2019s","start":7,"end":9,"id":2},{"text":"Like","start":10,"end":14,"id":3},{"text":"to","start":15,"end":17,"id":4},{"text":"Fight","start":18,"end":23,"id":5},{"text":"Online","start":24,"end":30,"id":6},{"text":"Hate","start":31,"end":35,"id":7}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[47][0m {"text":"Start-Ups Once Showered With Cash Now Have to Work for It","meta":{"source":"The New York Times"},"_input_hash":30895897,"_task_hash":848964929,"tokens":[{"text":"Start","start":0,"end":5,"id":0},{"text":"-","start":5,"end":6,"id":1},{"text":"Ups","start":6,"end":9,"id":2},{"text":"Once","start":10,"end":14,"id":3},{"text":"Showered","start":15,"end":23,"id":4},{"text":"With","start":24,"end":28,"id":5},{"text":"Cash","start":29,"end":33,"id":6},{"text":"Now","start":34,"end":37,"id":7},{"text":"Have","start":38,"end":42,"id":8},{"text":"to","start":43,"end":45,"id":9},{"text":"Work","start":46,"end":50,"id":10},{"text":"for","start":51,"end":54,"id":11},{"text":"It","start":55,"end":57,"id":12}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[48][0m {"text":"European Tech Scene Begins to Feel Silicon Valley\u2019s Woes","meta":{"source":"The New York Times"},"_input_hash":-1596306742,"_task_hash":-322758833,"tokens":[{"text":"European","start":0,"end":8,"id":0},{"text":"Tech","start":9,"end":13,"id":1},{"text":"Scene","start":14,"end":19,"id":2},{"text":"Begins","start":20,"end":26,"id":3},{"text":"to","start":27,"end":29,"id":4},{"text":"Feel","start":30,"end":34,"id":5},{"text":"Silicon","start":35,"end":42,"id":6},{"text":"Valley","start":43,"end":49,"id":7},{"text":"\u2019s","start":49,"end":51,"id":8},{"text":"Woes","start":52,"end":56,"id":9}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":35,"end":49,"token_start":6,"token_end":7,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[49][0m {"text":"Toyota Invests $1 Billion in Artificial Intelligence in U.S.","meta":{"source":"The New York Times"},"_input_hash":-1483756019,"_task_hash":-1607235731,"tokens":[{"text":"Toyota","start":0,"end":6,"id":0},{"text":"Invests","start":7,"end":14,"id":1},{"text":"$","start":15,"end":16,"id":2},{"text":"1","start":16,"end":17,"id":3},{"text":"Billion","start":18,"end":25,"id":4},{"text":"in","start":26,"end":28,"id":5},{"text":"Artificial","start":29,"end":39,"id":6},{"text":"Intelligence","start":40,"end":52,"id":7},{"text":"in","start":53,"end":55,"id":8},{"text":"U.S.","start":56,"end":60,"id":9}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":6,"token_start":0,"token_end":0,"label":"ORG"},{"start":56,"end":60,"token_start":9,"token_end":9,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[50][0m {"text":"Farhad and Mike\u2019s Week in Review: Twitter Problems","meta":{"source":"The New York Times"},"_input_hash":705551040,"_task_hash":-753312417,"tokens":[{"text":"Farhad","start":0,"end":6,"id":0},{"text":"and","start":7,"end":10,"id":1},{"text":"Mike","start":11,"end":15,"id":2},{"text":"\u2019s","start":15,"end":17,"id":3},{"text":"Week","start":18,"end":22,"id":4},{"text":"in","start":23,"end":25,"id":5},{"text":"Review","start":26,"end":32,"id":6},{"text":":","start":32,"end":33,"id":7},{"text":"Twitter","start":34,"end":41,"id":8},{"text":"Problems","start":42,"end":50,"id":9}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":6,"token_start":0,"token_end":0,"label":"PERSON"},{"start":11,"end":15,"token_start":2,"token_end":2,"label":"PERSON"},{"start":34,"end":41,"token_start":8,"token_end":8,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[51][0m {"text":"Steep Discounts a Boon for Customers, but a Gamble for Start-Ups","meta":{"source":"The New York Times"},"_input_hash":2035544155,"_task_hash":-1979177154,"tokens":[{"text":"Steep","start":0,"end":5,"id":0},{"text":"Discounts","start":6,"end":15,"id":1},{"text":"a","start":16,"end":17,"id":2},{"text":"Boon","start":18,"end":22,"id":3},{"text":"for","start":23,"end":26,"id":4},{"text":"Customers","start":27,"end":36,"id":5},{"text":",","start":36,"end":37,"id":6},{"text":"but","start":38,"end":41,"id":7},{"text":"a","start":42,"end":43,"id":8},{"text":"Gamble","start":44,"end":50,"id":9},{"text":"for","start":51,"end":54,"id":10},{"text":"Start","start":55,"end":60,"id":11},{"text":"-","start":60,"end":61,"id":12},{"text":"Ups","start":61,"end":64,"id":13}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[52][0m {"text":"Apple's Diversity Mirrors Other Tech Companies'   ","meta":{"source":"The New York Times"},"_input_hash":-846072878,"_task_hash":356712081,"tokens":[{"text":"Apple","start":0,"end":5,"id":0},{"text":"'s","start":5,"end":7,"id":1},{"text":"Diversity","start":8,"end":17,"id":2},{"text":"Mirrors","start":18,"end":25,"id":3},{"text":"Other","start":26,"end":31,"id":4},{"text":"Tech","start":32,"end":36,"id":5},{"text":"Companies","start":37,"end":46,"id":6},{"text":"'","start":46,"end":47,"id":7},{"text":"  ","start":48,"end":50,"id":8}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":5,"token_start":0,"token_end":0,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[53][0m {"text":"Building a Better Battery","meta":{"source":"The New York Times"},"_input_hash":-551855912,"_task_hash":-512802693,"tokens":[{"text":"Building","start":0,"end":8,"id":0},{"text":"a","start":9,"end":10,"id":1},{"text":"Better","start":11,"end":17,"id":2},{"text":"Battery","start":18,"end":25,"id":3}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[54][0m {"text":"Disruptions: If It Looks Like a Bubble and Floats Like a Bubble ...","meta":{"source":"The New York Times"},"_input_hash":-520529990,"_task_hash":625102749,"tokens":[{"text":"Disruptions","start":0,"end":11,"id":0},{"text":":","start":11,"end":12,"id":1},{"text":"If","start":13,"end":15,"id":2},{"text":"It","start":16,"end":18,"id":3},{"text":"Looks","start":19,"end":24,"id":4},{"text":"Like","start":25,"end":29,"id":5},{"text":"a","start":30,"end":31,"id":6},{"text":"Bubble","start":32,"end":38,"id":7},{"text":"and","start":39,"end":42,"id":8},{"text":"Floats","start":43,"end":49,"id":9},{"text":"Like","start":50,"end":54,"id":10},{"text":"a","start":55,"end":56,"id":11},{"text":"Bubble","start":57,"end":63,"id":12},{"text":"...","start":64,"end":67,"id":13}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[55][0m {"text":"Disruptions: Even the Tech Elites Leave Gadgets Behind","meta":{"source":"The New York Times"},"_input_hash":299065103,"_task_hash":1966883642,"tokens":[{"text":"Disruptions","start":0,"end":11,"id":0},{"text":":","start":11,"end":12,"id":1},{"text":"Even","start":13,"end":17,"id":2},{"text":"the","start":18,"end":21,"id":3},{"text":"Tech","start":22,"end":26,"id":4},{"text":"Elites","start":27,"end":33,"id":5},{"text":"Leave","start":34,"end":39,"id":6},{"text":"Gadgets","start":40,"end":47,"id":7},{"text":"Behind","start":48,"end":54,"id":8}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[56][0m {"text":"Latest Product From Tech Firms: An Immigration Bill","meta":{"source":"The New York Times"},"_input_hash":867057396,"_task_hash":599250424,"tokens":[{"text":"Latest","start":0,"end":6,"id":0},{"text":"Product","start":7,"end":14,"id":1},{"text":"From","start":15,"end":19,"id":2},{"text":"Tech","start":20,"end":24,"id":3},{"text":"Firms","start":25,"end":30,"id":4},{"text":":","start":30,"end":31,"id":5},{"text":"An","start":32,"end":34,"id":6},{"text":"Immigration","start":35,"end":46,"id":7},{"text":"Bill","start":47,"end":51,"id":8}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[57][0m {"text":"Migrant Bill Seems to Fit Tech Sector Wish List","meta":{"source":"The New York Times"},"_input_hash":1374094848,"_task_hash":-744170164,"tokens":[{"text":"Migrant","start":0,"end":7,"id":0},{"text":"Bill","start":8,"end":12,"id":1},{"text":"Seems","start":13,"end":18,"id":2},{"text":"to","start":19,"end":21,"id":3},{"text":"Fit","start":22,"end":25,"id":4},{"text":"Tech","start":26,"end":30,"id":5},{"text":"Sector","start":31,"end":37,"id":6},{"text":"Wish","start":38,"end":42,"id":7},{"text":"List","start":43,"end":47,"id":8}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[58][0m {"text":"The Internet Gets Physical","meta":{"source":"The New York Times"},"_input_hash":1014020866,"_task_hash":-4347523,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Internet","start":4,"end":12,"id":1},{"text":"Gets","start":13,"end":17,"id":2},{"text":"Physical","start":18,"end":26,"id":3}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[59][0m {"text":"The War Between Apple and Google Has Just Begun","meta":{"source":"The New York Times"},"_input_hash":-1337817349,"_task_hash":-577603233,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"War","start":4,"end":7,"id":1},{"text":"Between","start":8,"end":15,"id":2},{"text":"Apple","start":16,"end":21,"id":3},{"text":"and","start":22,"end":25,"id":4},{"text":"Google","start":26,"end":32,"id":5},{"text":"Has","start":33,"end":36,"id":6},{"text":"Just","start":37,"end":41,"id":7},{"text":"Begun","start":42,"end":47,"id":8}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":16,"end":21,"token_start":3,"token_end":3,"label":"ORG"},{"start":26,"end":32,"token_start":5,"token_end":5,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[60][0m {"text":"Site Lets Investors See and Copy Experts\u2019 Trades","meta":{"source":"The New York Times"},"_input_hash":-1710337958,"_task_hash":2075722436,"tokens":[{"text":"Site","start":0,"end":4,"id":0},{"text":"Lets","start":5,"end":9,"id":1},{"text":"Investors","start":10,"end":19,"id":2},{"text":"See","start":20,"end":23,"id":3},{"text":"and","start":24,"end":27,"id":4},{"text":"Copy","start":28,"end":32,"id":5},{"text":"Experts","start":33,"end":40,"id":6},{"text":"\u2019","start":40,"end":41,"id":7},{"text":"Trades","start":42,"end":48,"id":8}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[61][0m {"text":"Amid Conference Halls and Keynote Speakers, a Rivalry Forms","meta":{"source":"The New York Times"},"_input_hash":1488646977,"_task_hash":-1931923706,"tokens":[{"text":"Amid","start":0,"end":4,"id":0},{"text":"Conference","start":5,"end":15,"id":1},{"text":"Halls","start":16,"end":21,"id":2},{"text":"and","start":22,"end":25,"id":3},{"text":"Keynote","start":26,"end":33,"id":4},{"text":"Speakers","start":34,"end":42,"id":5},{"text":",","start":42,"end":43,"id":6},{"text":"a","start":44,"end":45,"id":7},{"text":"Rivalry","start":46,"end":53,"id":8},{"text":"Forms","start":54,"end":59,"id":9}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[62][0m {"text":"Economy Has Become a Drag on Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":996952568,"_task_hash":902493793,"tokens":[{"text":"Economy","start":0,"end":7,"id":0},{"text":"Has","start":8,"end":11,"id":1},{"text":"Become","start":12,"end":18,"id":2},{"text":"a","start":19,"end":20,"id":3},{"text":"Drag","start":21,"end":25,"id":4},{"text":"on","start":26,"end":28,"id":5},{"text":"Silicon","start":29,"end":36,"id":6},{"text":"Valley","start":37,"end":43,"id":7}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":29,"end":43,"token_start":6,"token_end":7,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: True
[35m[47m[63][0m {"text":"Yahoo Decides to Release a Rosy Forecast","meta":{"source":"The New York Times"},"_input_hash":20161671,"_task_hash":1826087238,"tokens":[{"text":"Yahoo","start":0,"end":5,"id":0},{"text":"Decides","start":6,"end":13,"id":1},{"text":"to","start":14,"end":16,"id":2},{"text":"Release","start":17,"end":24,"id":3},{"text":"a","start":25,"end":26,"id":4},{"text":"Rosy","start":27,"end":31,"id":5},{"text":"Forecast","start":32,"end":40,"id":6}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":5,"token_start":0,"token_end":0,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[64][0m {"text":"Silicon Valley Losing Middle-Wage Jobs","meta":{"source":"The New York Times"},"_input_hash":-582163403,"_task_hash":2032786603,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"Losing","start":15,"end":21,"id":2},{"text":"Middle","start":22,"end":28,"id":3},{"text":"-","start":28,"end":29,"id":4},{"text":"Wage","start":29,"end":33,"id":5},{"text":"Jobs","start":34,"end":38,"id":6}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":14,"token_start":0,"token_end":1,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[65][0m {"text":"The Working-Class Millionaire","meta":{"source":"The New York Times"},"_input_hash":182567306,"_task_hash":2068588200,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Working","start":4,"end":11,"id":1},{"text":"-","start":11,"end":12,"id":2},{"text":"Class","start":12,"end":17,"id":3},{"text":"Millionaire","start":18,"end":29,"id":4}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[66][0m {"text":"Andy Grove\u2019s Warning to Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":828786198,"_task_hash":159146262,"tokens":[{"text":"Andy","start":0,"end":4,"id":0},{"text":"Grove","start":5,"end":10,"id":1},{"text":"\u2019s","start":10,"end":12,"id":2},{"text":"Warning","start":13,"end":20,"id":3},{"text":"to","start":21,"end":23,"id":4},{"text":"Silicon","start":24,"end":31,"id":5},{"text":"Valley","start":32,"end":38,"id":6}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":10,"token_start":0,"token_end":1,"label":"PERSON"},{"start":24,"end":38,"token_start":5,"token_end":6,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[67][0m {"text":"Caution Rebuffed, Unicorns and Other Start-Ups Fixate on Rainbows","meta":{"source":"The New York Times"},"_input_hash":-98084756,"_task_hash":862294003,"tokens":[{"text":"Caution","start":0,"end":7,"id":0},{"text":"Rebuffed","start":8,"end":16,"id":1},{"text":",","start":16,"end":17,"id":2},{"text":"Unicorns","start":18,"end":26,"id":3},{"text":"and","start":27,"end":30,"id":4},{"text":"Other","start":31,"end":36,"id":5},{"text":"Start","start":37,"end":42,"id":6},{"text":"-","start":42,"end":43,"id":7},{"text":"Ups","start":43,"end":46,"id":8},{"text":"Fixate","start":47,"end":53,"id":9},{"text":"on","start":54,"end":56,"id":10},{"text":"Rainbows","start":57,"end":65,"id":11}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[68][0m {"text":"Kleiner Perkins, Disrupted","meta":{"source":"The New York Times"},"_input_hash":-1644597553,"_task_hash":1515588155,"tokens":[{"text":"Kleiner","start":0,"end":7,"id":0},{"text":"Perkins","start":8,"end":15,"id":1},{"text":",","start":15,"end":16,"id":2},{"text":"Disrupted","start":17,"end":26,"id":3}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":15,"token_start":0,"token_end":1,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[69][0m {"text":"When Uber and Airbnb Meet the Real World","meta":{"source":"The New York Times"},"_input_hash":-1840960120,"_task_hash":1330501518,"tokens":[{"text":"When","start":0,"end":4,"id":0},{"text":"Uber","start":5,"end":9,"id":1},{"text":"and","start":10,"end":13,"id":2},{"text":"Airbnb","start":14,"end":20,"id":3},{"text":"Meet","start":21,"end":25,"id":4},{"text":"the","start":26,"end":29,"id":5},{"text":"Real","start":30,"end":34,"id":6},{"text":"World","start":35,"end":40,"id":7}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":5,"end":9,"token_start":1,"token_end":1,"label":"ORG"},{"start":14,"end":20,"token_start":3,"token_end":3,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[70][0m {"text":"Yahoo Reveals Work Force Data, Joining Tech's Small Diversity Parade","meta":{"source":"The New York Times"},"_input_hash":556897753,"_task_hash":436160895,"tokens":[{"text":"Yahoo","start":0,"end":5,"id":0},{"text":"Reveals","start":6,"end":13,"id":1},{"text":"Work","start":14,"end":18,"id":2},{"text":"Force","start":19,"end":24,"id":3},{"text":"Data","start":25,"end":29,"id":4},{"text":",","start":29,"end":30,"id":5},{"text":"Joining","start":31,"end":38,"id":6},{"text":"Tech","start":39,"end":43,"id":7},{"text":"'s","start":43,"end":45,"id":8},{"text":"Small","start":46,"end":51,"id":9},{"text":"Diversity","start":52,"end":61,"id":10},{"text":"Parade","start":62,"end":68,"id":11}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":5,"token_start":0,"token_end":0,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[71][0m {"text":"Disruptions: The Echo Chamber of Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":-96241050,"_task_hash":1442132502,"tokens":[{"text":"Disruptions","start":0,"end":11,"id":0},{"text":":","start":11,"end":12,"id":1},{"text":"The","start":13,"end":16,"id":2},{"text":"Echo","start":17,"end":21,"id":3},{"text":"Chamber","start":22,"end":29,"id":4},{"text":"of","start":30,"end":32,"id":5},{"text":"Silicon","start":33,"end":40,"id":6},{"text":"Valley","start":41,"end":47,"id":7}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":33,"end":47,"token_start":6,"token_end":7,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[72][0m {"text":"TimesCast Tech: Career and Family in Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":275307633,"_task_hash":808965753,"tokens":[{"text":"TimesCast","start":0,"end":9,"id":0},{"text":"Tech","start":10,"end":14,"id":1},{"text":":","start":14,"end":15,"id":2},{"text":"Career","start":16,"end":22,"id":3},{"text":"and","start":23,"end":26,"id":4},{"text":"Family","start":27,"end":33,"id":5},{"text":"in","start":34,"end":36,"id":6},{"text":"Silicon","start":37,"end":44,"id":7},{"text":"Valley","start":45,"end":51,"id":8}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":37,"end":51,"token_start":7,"token_end":8,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[73][0m {"text":"Steve Jobs: He Brought the Show to Business","meta":{"source":"The New York Times"},"_input_hash":-1942148992,"_task_hash":445934574,"tokens":[{"text":"Steve","start":0,"end":5,"id":0},{"text":"Jobs","start":6,"end":10,"id":1},{"text":":","start":10,"end":11,"id":2},{"text":"He","start":12,"end":14,"id":3},{"text":"Brought","start":15,"end":22,"id":4},{"text":"the","start":23,"end":26,"id":5},{"text":"Show","start":27,"end":31,"id":6},{"text":"to","start":32,"end":34,"id":7},{"text":"Business","start":35,"end":43,"id":8}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":10,"token_start":0,"token_end":1,"label":"PERSON"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[74][0m {"text":"For Start-Ups, Late Bursts of Private Cash","meta":{"source":"The New York Times"},"_input_hash":-1506330639,"_task_hash":1501794331,"tokens":[{"text":"For","start":0,"end":3,"id":0},{"text":"Start","start":4,"end":9,"id":1},{"text":"-","start":9,"end":10,"id":2},{"text":"Ups","start":10,"end":13,"id":3},{"text":",","start":13,"end":14,"id":4},{"text":"Late","start":15,"end":19,"id":5},{"text":"Bursts","start":20,"end":26,"id":6},{"text":"of","start":27,"end":29,"id":7},{"text":"Private","start":30,"end":37,"id":8},{"text":"Cash","start":38,"end":42,"id":9}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[75][0m {"text":"AOL, Seeking to Revitalize Its Internet Role, Turns to a Candid Ex-Yahoo Executive","meta":{"source":"The New York Times"},"_input_hash":-1327627142,"_task_hash":421058316,"tokens":[{"text":"AOL","start":0,"end":3,"id":0},{"text":",","start":3,"end":4,"id":1},{"text":"Seeking","start":5,"end":12,"id":2},{"text":"to","start":13,"end":15,"id":3},{"text":"Revitalize","start":16,"end":26,"id":4},{"text":"Its","start":27,"end":30,"id":5},{"text":"Internet","start":31,"end":39,"id":6},{"text":"Role","start":40,"end":44,"id":7},{"text":",","start":44,"end":45,"id":8},{"text":"Turns","start":46,"end":51,"id":9},{"text":"to","start":52,"end":54,"id":10},{"text":"a","start":55,"end":56,"id":11},{"text":"Candid","start":57,"end":63,"id":12},{"text":"Ex","start":64,"end":66,"id":13},{"text":"-","start":66,"end":67,"id":14},{"text":"Yahoo","start":67,"end":72,"id":15},{"text":"Executive","start":73,"end":82,"id":16}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":3,"token_start":0,"token_end":0,"label":"ORG"},{"start":67,"end":72,"token_start":15,"token_end":15,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[76][0m {"text":"Buy.com Deal With eBay Angers Sellers","meta":{"source":"The New York Times"},"_input_hash":763428731,"_task_hash":-846368706,"tokens":[{"text":"Buy.com","start":0,"end":7,"id":0},{"text":"Deal","start":8,"end":12,"id":1},{"text":"With","start":13,"end":17,"id":2},{"text":"eBay","start":18,"end":22,"id":3},{"text":"Angers","start":23,"end":29,"id":4},{"text":"Sellers","start":30,"end":37,"id":5}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":7,"token_start":0,"token_end":0,"label":"ORG"},{"start":18,"end":22,"token_start":3,"token_end":3,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[77][0m {"text":"Silicon Valley Starts to Turn Its Face to the Sun","meta":{"source":"The New York Times"},"_input_hash":-1990855124,"_task_hash":97732763,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"Starts","start":15,"end":21,"id":2},{"text":"to","start":22,"end":24,"id":3},{"text":"Turn","start":25,"end":29,"id":4},{"text":"Its","start":30,"end":33,"id":5},{"text":"Face","start":34,"end":38,"id":6},{"text":"to","start":39,"end":41,"id":7},{"text":"the","start":42,"end":45,"id":8},{"text":"Sun","start":46,"end":49,"id":9}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":14,"token_start":0,"token_end":1,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[78][0m {"text":"Silicon Valley\u2019s High-Tech Hunt for Colleague","meta":{"source":"The New York Times"},"_input_hash":-190313980,"_task_hash":-1599271629,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"\u2019s","start":14,"end":16,"id":2},{"text":"High","start":17,"end":21,"id":3},{"text":"-","start":21,"end":22,"id":4},{"text":"Tech","start":22,"end":26,"id":5},{"text":"Hunt","start":27,"end":31,"id":6},{"text":"for","start":32,"end":35,"id":7},{"text":"Colleague","start":36,"end":45,"id":8}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":14,"token_start":0,"token_end":1,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[79][0m {"text":"Twitter\u2019s Troubles and Snap\u2019s Appeal: It\u2019s All About the Mojo","meta":{"source":"The New York Times"},"_input_hash":-1152270979,"_task_hash":-777464298,"tokens":[{"text":"Twitter","start":0,"end":7,"id":0},{"text":"\u2019s","start":7,"end":9,"id":1},{"text":"Troubles","start":10,"end":18,"id":2},{"text":"and","start":19,"end":22,"id":3},{"text":"Snap","start":23,"end":27,"id":4},{"text":"\u2019s","start":27,"end":29,"id":5},{"text":"Appeal","start":30,"end":36,"id":6},{"text":":","start":36,"end":37,"id":7},{"text":"It","start":38,"end":40,"id":8},{"text":"\u2019s","start":40,"end":42,"id":9},{"text":"All","start":43,"end":46,"id":10},{"text":"About","start":47,"end":52,"id":11},{"text":"the","start":53,"end":56,"id":12},{"text":"Mojo","start":57,"end":61,"id":13}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":7,"token_start":0,"token_end":0,"label":"ORG"},{"start":23,"end":27,"token_start":4,"token_end":4,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[80][0m {"text":"A Rarity at a Republican Convention: \u2018I Am Proud to Be Gay\u2019","meta":{"source":"The New York Times"},"_input_hash":905801942,"_task_hash":735415051,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Rarity","start":2,"end":8,"id":1},{"text":"at","start":9,"end":11,"id":2},{"text":"a","start":12,"end":13,"id":3},{"text":"Republican","start":14,"end":24,"id":4},{"text":"Convention","start":25,"end":35,"id":5},{"text":":","start":35,"end":36,"id":6},{"text":"\u2018","start":37,"end":38,"id":7},{"text":"I","start":38,"end":39,"id":8},{"text":"Am","start":40,"end":42,"id":9},{"text":"Proud","start":43,"end":48,"id":10},{"text":"to","start":49,"end":51,"id":11},{"text":"Be","start":52,"end":54,"id":12},{"text":"Gay","start":55,"end":58,"id":13},{"text":"\u2019","start":58,"end":59,"id":14}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[81][0m {"text":"Pinterest Hires Its First Head of Diversity","meta":{"source":"The New York Times"},"_input_hash":955083047,"_task_hash":-2039133143,"tokens":[{"text":"Pinterest","start":0,"end":9,"id":0},{"text":"Hires","start":10,"end":15,"id":1},{"text":"Its","start":16,"end":19,"id":2},{"text":"First","start":20,"end":25,"id":3},{"text":"Head","start":26,"end":30,"id":4},{"text":"of","start":31,"end":33,"id":5},{"text":"Diversity","start":34,"end":43,"id":6}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":9,"token_start":0,"token_end":0,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[82][0m {"text":"Daily Report: Narendra Modi, Indian Prime Minister, Conquers Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":1389949406,"_task_hash":-1181298363,"tokens":[{"text":"Daily","start":0,"end":5,"id":0},{"text":"Report","start":6,"end":12,"id":1},{"text":":","start":12,"end":13,"id":2},{"text":"Narendra","start":14,"end":22,"id":3},{"text":"Modi","start":23,"end":27,"id":4},{"text":",","start":27,"end":28,"id":5},{"text":"Indian","start":29,"end":35,"id":6},{"text":"Prime","start":36,"end":41,"id":7},{"text":"Minister","start":42,"end":50,"id":8},{"text":",","start":50,"end":51,"id":9},{"text":"Conquers","start":52,"end":60,"id":10},{"text":"Silicon","start":61,"end":68,"id":11},{"text":"Valley","start":69,"end":75,"id":12}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":14,"end":27,"token_start":3,"token_end":4,"label":"PERSON"},{"start":61,"end":75,"token_start":11,"token_end":12,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[83][0m {"text":"Inside Amazon: Reporter\u2019s Notebook","meta":{"source":"The New York Times"},"_input_hash":-1708178938,"_task_hash":-2140149728,"tokens":[{"text":"Inside","start":0,"end":6,"id":0},{"text":"Amazon","start":7,"end":13,"id":1},{"text":":","start":13,"end":14,"id":2},{"text":"Reporter","start":15,"end":23,"id":3},{"text":"\u2019s","start":23,"end":25,"id":4},{"text":"Notebook","start":26,"end":34,"id":5}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":7,"end":13,"token_start":1,"token_end":1,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[84][0m {"text":"Hot Tech Start-Ups May Face a Long and Bumpy Fall","meta":{"source":"The New York Times"},"_input_hash":990001304,"_task_hash":1460172575,"tokens":[{"text":"Hot","start":0,"end":3,"id":0},{"text":"Tech","start":4,"end":8,"id":1},{"text":"Start","start":9,"end":14,"id":2},{"text":"-","start":14,"end":15,"id":3},{"text":"Ups","start":15,"end":18,"id":4},{"text":"May","start":19,"end":22,"id":5},{"text":"Face","start":23,"end":27,"id":6},{"text":"a","start":28,"end":29,"id":7},{"text":"Long","start":30,"end":34,"id":8},{"text":"and","start":35,"end":38,"id":9},{"text":"Bumpy","start":39,"end":44,"id":10},{"text":"Fall","start":45,"end":49,"id":11}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[85][0m {"text":"White House Takes Cybersecurity Pitch to Silicon Valley ","meta":{"source":"The New York Times"},"_input_hash":1795892564,"_task_hash":-621105115,"tokens":[{"text":"White","start":0,"end":5,"id":0},{"text":"House","start":6,"end":11,"id":1},{"text":"Takes","start":12,"end":17,"id":2},{"text":"Cybersecurity","start":18,"end":31,"id":3},{"text":"Pitch","start":32,"end":37,"id":4},{"text":"to","start":38,"end":40,"id":5},{"text":"Silicon","start":41,"end":48,"id":6},{"text":"Valley","start":49,"end":55,"id":7}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":11,"token_start":0,"token_end":1,"label":"LOCATION"},{"start":41,"end":55,"token_start":6,"token_end":7,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[86][0m {"text":"The PayPal Mafia\u2019s Golden Touch","meta":{"source":"The New York Times"},"_input_hash":411750590,"_task_hash":-526365522,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"PayPal","start":4,"end":10,"id":1},{"text":"Mafia","start":11,"end":16,"id":2},{"text":"\u2019s","start":16,"end":18,"id":3},{"text":"Golden","start":19,"end":25,"id":4},{"text":"Touch","start":26,"end":31,"id":5}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":4,"end":10,"token_start":1,"token_end":1,"label":"ORG"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[87][0m {"text":"What We're Reading","meta":{"source":"The New York Times"},"_input_hash":-406162946,"_task_hash":-1026091613,"tokens":[{"text":"What","start":0,"end":4,"id":0},{"text":"We","start":5,"end":7,"id":1},{"text":"'re","start":7,"end":10,"id":2},{"text":"Reading","start":11,"end":18,"id":3}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[88][0m {"text":"Will Boom Lead to Bust in Silicon Valley? ","meta":{"source":"The New York Times"},"_input_hash":1372252837,"_task_hash":1832434778,"tokens":[{"text":"Will","start":0,"end":4,"id":0},{"text":"Boom","start":5,"end":9,"id":1},{"text":"Lead","start":10,"end":14,"id":2},{"text":"to","start":15,"end":17,"id":3},{"text":"Bust","start":18,"end":22,"id":4},{"text":"in","start":23,"end":25,"id":5},{"text":"Silicon","start":26,"end":33,"id":6},{"text":"Valley","start":34,"end":40,"id":7},{"text":"?","start":40,"end":41,"id":8}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":26,"end":40,"token_start":6,"token_end":7,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[89][0m {"text":"Tech Industry Flexes Muscle in California Race","meta":{"source":"The New York Times"},"_input_hash":714338295,"_task_hash":756064619,"tokens":[{"text":"Tech","start":0,"end":4,"id":0},{"text":"Industry","start":5,"end":13,"id":1},{"text":"Flexes","start":14,"end":20,"id":2},{"text":"Muscle","start":21,"end":27,"id":3},{"text":"in","start":28,"end":30,"id":4},{"text":"California","start":31,"end":41,"id":5},{"text":"Race","start":42,"end":46,"id":6}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":31,"end":41,"token_start":5,"token_end":5,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[90][0m {"text":"Disruptions: A Blogger Mocks the Denizens of Silicon Valley ","meta":{"source":"The New York Times"},"_input_hash":-240465485,"_task_hash":-1818063830,"tokens":[{"text":"Disruptions","start":0,"end":11,"id":0},{"text":":","start":11,"end":12,"id":1},{"text":"A","start":13,"end":14,"id":2},{"text":"Blogger","start":15,"end":22,"id":3},{"text":"Mocks","start":23,"end":28,"id":4},{"text":"the","start":29,"end":32,"id":5},{"text":"Denizens","start":33,"end":41,"id":6},{"text":"of","start":42,"end":44,"id":7},{"text":"Silicon","start":45,"end":52,"id":8},{"text":"Valley","start":53,"end":59,"id":9}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":45,"end":59,"token_start":8,"token_end":9,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[91][0m {"text":"How Big Data Is Playing Recruiter for Specialized Workers","meta":{"source":"The New York Times"},"_input_hash":-324249968,"_task_hash":-890996974,"tokens":[{"text":"How","start":0,"end":3,"id":0},{"text":"Big","start":4,"end":7,"id":1},{"text":"Data","start":8,"end":12,"id":2},{"text":"Is","start":13,"end":15,"id":3},{"text":"Playing","start":16,"end":23,"id":4},{"text":"Recruiter","start":24,"end":33,"id":5},{"text":"for","start":34,"end":37,"id":6},{"text":"Specialized","start":38,"end":49,"id":7},{"text":"Workers","start":50,"end":57,"id":8}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[92][0m {"text":"Daily Report: Multinationals Push Into Venture Capital","meta":{"source":"The New York Times"},"_input_hash":-1396377100,"_task_hash":-1854834538,"tokens":[{"text":"Daily","start":0,"end":5,"id":0},{"text":"Report","start":6,"end":12,"id":1},{"text":":","start":12,"end":13,"id":2},{"text":"Multinationals","start":14,"end":28,"id":3},{"text":"Push","start":29,"end":33,"id":4},{"text":"Into","start":34,"end":38,"id":5},{"text":"Venture","start":39,"end":46,"id":6},{"text":"Capital","start":47,"end":54,"id":7}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[93][0m {"text":"As Silicon Valley Cheers Yahoo Chief, Wall Street's Reaction Is Muted","meta":{"source":"The New York Times"},"_input_hash":-948883400,"_task_hash":595688040,"tokens":[{"text":"As","start":0,"end":2,"id":0},{"text":"Silicon","start":3,"end":10,"id":1},{"text":"Valley","start":11,"end":17,"id":2},{"text":"Cheers","start":18,"end":24,"id":3},{"text":"Yahoo","start":25,"end":30,"id":4},{"text":"Chief","start":31,"end":36,"id":5},{"text":",","start":36,"end":37,"id":6},{"text":"Wall","start":38,"end":42,"id":7},{"text":"Street","start":43,"end":49,"id":8},{"text":"'s","start":49,"end":51,"id":9},{"text":"Reaction","start":52,"end":60,"id":10},{"text":"Is","start":61,"end":63,"id":11},{"text":"Muted","start":64,"end":69,"id":12}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":3,"end":17,"token_start":1,"token_end":2,"label":"LOCATION"},{"start":25,"end":30,"token_start":4,"token_end":4,"label":"ORG"},{"start":38,"end":49,"token_start":7,"token_end":8,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: True
[35m[47m[94][0m {"text":"Old Techies Never Die; They Just Can\u2019t Get Hired as an Industry Moves On","meta":{"source":"The New York Times"},"_input_hash":-1477808074,"_task_hash":-1868628908,"tokens":[{"text":"Old","start":0,"end":3,"id":0},{"text":"Techies","start":4,"end":11,"id":1},{"text":"Never","start":12,"end":17,"id":2},{"text":"Die","start":18,"end":21,"id":3},{"text":";","start":21,"end":22,"id":4},{"text":"They","start":23,"end":27,"id":5},{"text":"Just","start":28,"end":32,"id":6},{"text":"Ca","start":33,"end":35,"id":7},{"text":"n\u2019t","start":35,"end":38,"id":8},{"text":"Get","start":39,"end":42,"id":9},{"text":"Hired","start":43,"end":48,"id":10},{"text":"as","start":49,"end":51,"id":11},{"text":"an","start":52,"end":54,"id":12},{"text":"Industry","start":55,"end":63,"id":13},{"text":"Moves","start":64,"end":69,"id":14},{"text":"On","start":70,"end":72,"id":15}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}


[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[95][0m {"text":"A Silicon Bubble Shows Signs of Reinflating","meta":{"source":"The New York Times"},"_input_hash":66294740,"_task_hash":-980559113,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Silicon","start":2,"end":9,"id":1},{"text":"Bubble","start":10,"end":16,"id":2},{"text":"Shows","start":17,"end":22,"id":3},{"text":"Signs","start":23,"end":28,"id":4},{"text":"of","start":29,"end":31,"id":5},{"text":"Reinflating","start":32,"end":43,"id":6}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[96][0m {"text":"A Start-Up Says It Can Predict Others\u2019 Fate","meta":{"source":"The New York Times"},"_input_hash":1282623845,"_task_hash":-773413451,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Start","start":2,"end":7,"id":1},{"text":"-","start":7,"end":8,"id":2},{"text":"Up","start":8,"end":10,"id":3},{"text":"Says","start":11,"end":15,"id":4},{"text":"It","start":16,"end":18,"id":5},{"text":"Can","start":19,"end":22,"id":6},{"text":"Predict","start":23,"end":30,"id":7},{"text":"Others","start":31,"end":37,"id":8},{"text":"\u2019","start":37,"end":38,"id":9},{"text":"Fate","start":39,"end":43,"id":10}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[97][0m {"text":"More Than Games, a Net to Snare Social Networkers","meta":{"source":"The New York Times"},"_input_hash":-492454174,"_task_hash":-2113424713,"tokens":[{"text":"More","start":0,"end":4,"id":0},{"text":"Than","start":5,"end":9,"id":1},{"text":"Games","start":10,"end":15,"id":2},{"text":",","start":15,"end":16,"id":3},{"text":"a","start":17,"end":18,"id":4},{"text":"Net","start":19,"end":22,"id":5},{"text":"to","start":23,"end":25,"id":6},{"text":"Snare","start":26,"end":31,"id":7},{"text":"Social","start":32,"end":38,"id":8},{"text":"Networkers","start":39,"end":49,"id":9}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[98][0m {"text":"Silicon Valley Shaped by Technology and Traffic","meta":{"source":"The New York Times"},"_input_hash":-631796602,"_task_hash":-1469585564,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"Shaped","start":15,"end":21,"id":2},{"text":"by","start":22,"end":24,"id":3},{"text":"Technology","start":25,"end":35,"id":4},{"text":"and","start":36,"end":39,"id":5},{"text":"Traffic","start":40,"end":47,"id":6}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":0,"end":14,"token_start":0,"token_end":1,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[99][0m {"text":"In Silicon Valley, Millionaires Who Don\u2019t Feel Rich","meta":{"source":"The New York Times"},"_input_hash":565721226,"_task_hash":1580444198,"tokens":[{"text":"In","start":0,"end":2,"id":0},{"text":"Silicon","start":3,"end":10,"id":1},{"text":"Valley","start":11,"end":17,"id":2},{"text":",","start":17,"end":18,"id":3},{"text":"Millionaires","start":19,"end":31,"id":4},{"text":"Who","start":32,"end":35,"id":5},{"text":"Do","start":36,"end":38,"id":6},{"text":"n\u2019t","start":38,"end":41,"id":7},{"text":"Feel","start":42,"end":46,"id":8},{"text":"Rich","start":47,"end":51,"id":9}],"_session_id":null,"_view_id":"ner_manual","spans":[{"start":3,"end":17,"token_start":1,"token_end":2,"label":"LOCATION"}],"answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[100][0m {"text":"Lots of Froth but No Bubble","meta":{"source":"The New York Times"},"_input_hash":-703580509,"_task_hash":676787575,"tokens":[{"text":"Lots","start":0,"end":4,"id":0},{"text":"of","start":5,"end":7,"id":1},{"text":"Froth","start":8,"end":13,"id":2},{"text":"but","start":14,"end":17,"id":3},{"text":"No","start":18,"end":20,"id":4},{"text":"Bubble","start":21,"end":27,"id":5}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[101][0m {"text":"Start-Up Fervor Shifts to Energy in Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":1469554448,"_task_hash":-1252362928,"tokens":[{"text":"Start","start":0,"end":5,"id":0},{"text":"-","start":5,"end":6,"id":1},{"text":"Up","start":6,"end":8,"id":2},{"text":"Fervor","start":9,"end":15,"id":3},{"text":"Shifts","start":16,"end":22,"id":4},{"text":"to","start":23,"end":25,"id":5},{"text":"Energy","start":26,"end":32,"id":6},{"text":"in","start":33,"end":35,"id":7},{"text":"Silicon","start":36,"end":43,"id":8},{"text":"Valley","start":44,"end":50,"id":9}],"spans":[{"token_start":8,"token_end":9,"start":36,"end":50,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":1469554448}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[102][0m {"text":"VeriSign Moves to Address an Internet Security Problem","meta":{"source":"The New York Times"},"_input_hash":548721606,"_task_hash":452732924,"tokens":[{"text":"VeriSign","start":0,"end":8,"id":0},{"text":"Moves","start":9,"end":14,"id":1},{"text":"to","start":15,"end":17,"id":2},{"text":"Address","start":18,"end":25,"id":3},{"text":"an","start":26,"end":28,"id":4},{"text":"Internet","start":29,"end":37,"id":5},{"text":"Security","start":38,"end":46,"id":6},{"text":"Problem","start":47,"end":54,"id":7}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":8,"text":"VeriSign","label":"ORG","source":"en_newshead_lg/","input_hash":548721606}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[103][0m {"text":"China, Not Silicon Valley, Is Cutting Edge in Mobile Tech","meta":{"source":"The New York Times"},"_input_hash":-530262295,"_task_hash":-2091114577,"tokens":[{"text":"China","start":0,"end":5,"id":0},{"text":",","start":5,"end":6,"id":1},{"text":"Not","start":7,"end":10,"id":2},{"text":"Silicon","start":11,"end":18,"id":3},{"text":"Valley","start":19,"end":25,"id":4},{"text":",","start":25,"end":26,"id":5},{"text":"Is","start":27,"end":29,"id":6},{"text":"Cutting","start":30,"end":37,"id":7},{"text":"Edge","start":38,"end":42,"id":8},{"text":"in","start":43,"end":45,"id":9},{"text":"Mobile","start":46,"end":52,"id":10},{"text":"Tech","start":53,"end":57,"id":11}],"spans":[{"start":0,"end":5,"token_start":0,"token_end":0,"label":"LOCATION"},{"start":11,"end":25,"token_start":3,"token_end":4,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[104][0m {"text":"Women in Tech Band Together to Track Diversity, After Hours","meta":{"source":"The New York Times"},"_input_hash":-846664900,"_task_hash":1586797517,"tokens":[{"text":"Women","start":0,"end":5,"id":0},{"text":"in","start":6,"end":8,"id":1},{"text":"Tech","start":9,"end":13,"id":2},{"text":"Band","start":14,"end":18,"id":3},{"text":"Together","start":19,"end":27,"id":4},{"text":"to","start":28,"end":30,"id":5},{"text":"Track","start":31,"end":36,"id":6},{"text":"Diversity","start":37,"end":46,"id":7},{"text":",","start":46,"end":47,"id":8},{"text":"After","start":48,"end":53,"id":9},{"text":"Hours","start":54,"end":59,"id":10}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[105][0m {"text":"Facebook\u2019s Developer Conference Kicks Off","meta":{"source":"The New York Times"},"_input_hash":-366116774,"_task_hash":-267452701,"tokens":[{"text":"Facebook","start":0,"end":8,"id":0},{"text":"\u2019s","start":8,"end":10,"id":1},{"text":"Developer","start":11,"end":20,"id":2},{"text":"Conference","start":21,"end":31,"id":3},{"text":"Kicks","start":32,"end":37,"id":4},{"text":"Off","start":38,"end":41,"id":5}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":8,"text":"Facebook","label":"ORG","source":"en_newshead_lg/","input_hash":-366116774}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[106][0m {"text":"An Anonymous Satire of Silicon Valley Now Has a Publisher","meta":{"source":"The New York Times"},"_input_hash":-1662518849,"_task_hash":-791302267,"tokens":[{"text":"An","start":0,"end":2,"id":0},{"text":"Anonymous","start":3,"end":12,"id":1},{"text":"Satire","start":13,"end":19,"id":2},{"text":"of","start":20,"end":22,"id":3},{"text":"Silicon","start":23,"end":30,"id":4},{"text":"Valley","start":31,"end":37,"id":5},{"text":"Now","start":38,"end":41,"id":6},{"text":"Has","start":42,"end":45,"id":7},{"text":"a","start":46,"end":47,"id":8},{"text":"Publisher","start":48,"end":57,"id":9}],"spans":[{"token_start":4,"token_end":5,"start":23,"end":37,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1662518849}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[107][0m {"text":"Silicon Valley Bank Strengthens Its Roots","meta":{"source":"The New York Times"},"_input_hash":2080623691,"_task_hash":814707922,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"Bank","start":15,"end":19,"id":2},{"text":"Strengthens","start":20,"end":31,"id":3},{"text":"Its","start":32,"end":35,"id":4},{"text":"Roots","start":36,"end":41,"id":5}],"spans":[{"start":0,"end":19,"token_start":0,"token_end":2,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[108][0m {"text":"Daily Report: Rivalry Brewing Between Uber and Google","meta":{"source":"The New York Times"},"_input_hash":2044055232,"_task_hash":-1068624561,"tokens":[{"text":"Daily","start":0,"end":5,"id":0},{"text":"Report","start":6,"end":12,"id":1},{"text":":","start":12,"end":13,"id":2},{"text":"Rivalry","start":14,"end":21,"id":3},{"text":"Brewing","start":22,"end":29,"id":4},{"text":"Between","start":30,"end":37,"id":5},{"text":"Uber","start":38,"end":42,"id":6},{"text":"and","start":43,"end":46,"id":7},{"text":"Google","start":47,"end":53,"id":8}],"spans":[{"token_start":6,"token_end":6,"start":38,"end":42,"text":"Uber","label":"ORG","source":"en_newshead_lg/","input_hash":2044055232},{"token_start":8,"token_end":8,"start":47,"end":53,"text":"Google","label":"ORG","source":"en_newshead_lg/","input_hash":2044055232}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[109][0m {"text":"Behind the Cover Story: Yiren Lu on the Angst, Perks and Failures of the Tech Industry","meta":{"source":"The New York Times"},"_input_hash":-259185164,"_task_hash":1783801793,"tokens":[{"text":"Behind","start":0,"end":6,"id":0},{"text":"the","start":7,"end":10,"id":1},{"text":"Cover","start":11,"end":16,"id":2},{"text":"Story","start":17,"end":22,"id":3},{"text":":","start":22,"end":23,"id":4},{"text":"Yiren","start":24,"end":29,"id":5},{"text":"Lu","start":30,"end":32,"id":6},{"text":"on","start":33,"end":35,"id":7},{"text":"the","start":36,"end":39,"id":8},{"text":"Angst","start":40,"end":45,"id":9},{"text":",","start":45,"end":46,"id":10},{"text":"Perks","start":47,"end":52,"id":11},{"text":"and","start":53,"end":56,"id":12},{"text":"Failures","start":57,"end":65,"id":13},{"text":"of","start":66,"end":68,"id":14},{"text":"the","start":69,"end":72,"id":15},{"text":"Tech","start":73,"end":77,"id":16},{"text":"Industry","start":78,"end":86,"id":17}],"spans":[{"token_start":5,"token_end":6,"start":24,"end":32,"text":"Yiren Lu","label":"PERSON","source":"en_newshead_lg/","input_hash":-259185164}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[110][0m {"text":"Thorny Side Effects in Silicon Valley Tactic to Keep Control","meta":{"source":"The New York Times"},"_input_hash":-1975294817,"_task_hash":1177221989,"tokens":[{"text":"Thorny","start":0,"end":6,"id":0},{"text":"Side","start":7,"end":11,"id":1},{"text":"Effects","start":12,"end":19,"id":2},{"text":"in","start":20,"end":22,"id":3},{"text":"Silicon","start":23,"end":30,"id":4},{"text":"Valley","start":31,"end":37,"id":5},{"text":"Tactic","start":38,"end":44,"id":6},{"text":"to","start":45,"end":47,"id":7},{"text":"Keep","start":48,"end":52,"id":8},{"text":"Control","start":53,"end":60,"id":9}],"spans":[{"token_start":4,"token_end":5,"start":23,"end":37,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1975294817}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[111][0m {"text":"Is New York's Tech Boom Sustainable?","meta":{"source":"The New York Times"},"_input_hash":794548505,"_task_hash":1675905541,"tokens":[{"text":"Is","start":0,"end":2,"id":0},{"text":"New","start":3,"end":6,"id":1},{"text":"York","start":7,"end":11,"id":2},{"text":"'s","start":11,"end":13,"id":3},{"text":"Tech","start":14,"end":18,"id":4},{"text":"Boom","start":19,"end":23,"id":5},{"text":"Sustainable","start":24,"end":35,"id":6},{"text":"?","start":35,"end":36,"id":7}],"spans":[{"token_start":1,"token_end":2,"start":3,"end":11,"text":"New York","label":"LOCATION","source":"en_newshead_lg/","input_hash":794548505}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[112][0m {"text":"Internet Giants Foster, and Threaten, Innovation Economy","meta":{"source":"The New York Times"},"_input_hash":-104476488,"_task_hash":-2068476247,"tokens":[{"text":"Internet","start":0,"end":8,"id":0},{"text":"Giants","start":9,"end":15,"id":1},{"text":"Foster","start":16,"end":22,"id":2},{"text":",","start":22,"end":23,"id":3},{"text":"and","start":24,"end":27,"id":4},{"text":"Threaten","start":28,"end":36,"id":5},{"text":",","start":36,"end":37,"id":6},{"text":"Innovation","start":38,"end":48,"id":7},{"text":"Economy","start":49,"end":56,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[113][0m {"text":"Following Venture Capital for Signs of Tech to Come","meta":{"source":"The New York Times"},"_input_hash":2142519919,"_task_hash":-860828913,"tokens":[{"text":"Following","start":0,"end":9,"id":0},{"text":"Venture","start":10,"end":17,"id":1},{"text":"Capital","start":18,"end":25,"id":2},{"text":"for","start":26,"end":29,"id":3},{"text":"Signs","start":30,"end":35,"id":4},{"text":"of","start":36,"end":38,"id":5},{"text":"Tech","start":39,"end":43,"id":6},{"text":"to","start":44,"end":46,"id":7},{"text":"Come","start":47,"end":51,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[114][0m {"text":"At Social Site, Only the Businesslike Need Apply","meta":{"source":"The New York Times"},"_input_hash":-2055138612,"_task_hash":-140428290,"tokens":[{"text":"At","start":0,"end":2,"id":0},{"text":"Social","start":3,"end":9,"id":1},{"text":"Site","start":10,"end":14,"id":2},{"text":",","start":14,"end":15,"id":3},{"text":"Only","start":16,"end":20,"id":4},{"text":"the","start":21,"end":24,"id":5},{"text":"Businesslike","start":25,"end":37,"id":6},{"text":"Need","start":38,"end":42,"id":7},{"text":"Apply","start":43,"end":48,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[115][0m {"text":"When It Comes to Innovation, Geography Is Destiny","meta":{"source":"The New York Times"},"_input_hash":-140950965,"_task_hash":1756226418,"tokens":[{"text":"When","start":0,"end":4,"id":0},{"text":"It","start":5,"end":7,"id":1},{"text":"Comes","start":8,"end":13,"id":2},{"text":"to","start":14,"end":16,"id":3},{"text":"Innovation","start":17,"end":27,"id":4},{"text":",","start":27,"end":28,"id":5},{"text":"Geography","start":29,"end":38,"id":6},{"text":"Is","start":39,"end":41,"id":7},{"text":"Destiny","start":42,"end":49,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[116][0m {"text":"Tech Billionaire Backing Trump Suggests Silicon Valley Is Out of Touch","meta":{"source":"The New York Times"},"_input_hash":1719198484,"_task_hash":-869706167,"tokens":[{"text":"Tech","start":0,"end":4,"id":0},{"text":"Billionaire","start":5,"end":16,"id":1},{"text":"Backing","start":17,"end":24,"id":2},{"text":"Trump","start":25,"end":30,"id":3},{"text":"Suggests","start":31,"end":39,"id":4},{"text":"Silicon","start":40,"end":47,"id":5},{"text":"Valley","start":48,"end":54,"id":6},{"text":"Is","start":55,"end":57,"id":7},{"text":"Out","start":58,"end":61,"id":8},{"text":"of","start":62,"end":64,"id":9},{"text":"Touch","start":65,"end":70,"id":10}],"spans":[{"start":25,"end":30,"token_start":3,"token_end":3,"label":"PERSON"},{"start":40,"end":54,"token_start":5,"token_end":6,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[117][0m {"text":"How Silicon Valley Treats a Trump Backer: Peter Thiel","meta":{"source":"The New York Times"},"_input_hash":-2758885,"_task_hash":2130848849,"tokens":[{"text":"How","start":0,"end":3,"id":0},{"text":"Silicon","start":4,"end":11,"id":1},{"text":"Valley","start":12,"end":18,"id":2},{"text":"Treats","start":19,"end":25,"id":3},{"text":"a","start":26,"end":27,"id":4},{"text":"Trump","start":28,"end":33,"id":5},{"text":"Backer","start":34,"end":40,"id":6},{"text":":","start":40,"end":41,"id":7},{"text":"Peter","start":42,"end":47,"id":8},{"text":"Thiel","start":48,"end":53,"id":9}],"spans":[{"start":4,"end":18,"token_start":1,"token_end":2,"label":"LOCATION"},{"start":28,"end":33,"token_start":5,"token_end":5,"label":"PERSON"},{"start":42,"end":53,"token_start":8,"token_end":9,"label":"PERSON"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[118][0m {"text":"Parents Ready for Some Love From Silicon Valley Companies","meta":{"source":"The New York Times"},"_input_hash":1361343172,"_task_hash":-1984217144,"tokens":[{"text":"Parents","start":0,"end":7,"id":0},{"text":"Ready","start":8,"end":13,"id":1},{"text":"for","start":14,"end":17,"id":2},{"text":"Some","start":18,"end":22,"id":3},{"text":"Love","start":23,"end":27,"id":4},{"text":"From","start":28,"end":32,"id":5},{"text":"Silicon","start":33,"end":40,"id":6},{"text":"Valley","start":41,"end":47,"id":7},{"text":"Companies","start":48,"end":57,"id":8}],"spans":[{"token_start":6,"token_end":7,"start":33,"end":47,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":1361343172}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[119][0m {"text":"Scrutiny of Security Start-Ups May Signal Shift in Venture Funding","meta":{"source":"The New York Times"},"_input_hash":393081339,"_task_hash":1989519546,"tokens":[{"text":"Scrutiny","start":0,"end":8,"id":0},{"text":"of","start":9,"end":11,"id":1},{"text":"Security","start":12,"end":20,"id":2},{"text":"Start","start":21,"end":26,"id":3},{"text":"-","start":26,"end":27,"id":4},{"text":"Ups","start":27,"end":30,"id":5},{"text":"May","start":31,"end":34,"id":6},{"text":"Signal","start":35,"end":41,"id":7},{"text":"Shift","start":42,"end":47,"id":8},{"text":"in","start":48,"end":50,"id":9},{"text":"Venture","start":51,"end":58,"id":10},{"text":"Funding","start":59,"end":66,"id":11}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[120][0m {"text":"Marissa Mayer of Yahoo Says She&#8217;s Pregnant With Twins","meta":{"source":"The New York Times"},"_input_hash":27563335,"_task_hash":2029658316,"tokens":[{"text":"Marissa","start":0,"end":7,"id":0},{"text":"Mayer","start":8,"end":13,"id":1},{"text":"of","start":14,"end":16,"id":2},{"text":"Yahoo","start":17,"end":22,"id":3},{"text":"Says","start":23,"end":27,"id":4},{"text":"She&#8217;s","start":28,"end":39,"id":5},{"text":"Pregnant","start":40,"end":48,"id":6},{"text":"With","start":49,"end":53,"id":7},{"text":"Twins","start":54,"end":59,"id":8}],"spans":[{"start":0,"end":13,"token_start":0,"token_end":1,"label":"PERSON"},{"start":17,"end":22,"token_start":3,"token_end":3,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[121][0m {"text":"A Novel Prompts a Conversation About How We Use Technology","meta":{"source":"The New York Times"},"_input_hash":2031281659,"_task_hash":-1906154319,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Novel","start":2,"end":7,"id":1},{"text":"Prompts","start":8,"end":15,"id":2},{"text":"a","start":16,"end":17,"id":3},{"text":"Conversation","start":18,"end":30,"id":4},{"text":"About","start":31,"end":36,"id":5},{"text":"How","start":37,"end":40,"id":6},{"text":"We","start":41,"end":43,"id":7},{"text":"Use","start":44,"end":47,"id":8},{"text":"Technology","start":48,"end":58,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[122][0m {"text":"Tech Industry Sets Its Sights on Gambling","meta":{"source":"The New York Times"},"_input_hash":533473571,"_task_hash":861853358,"tokens":[{"text":"Tech","start":0,"end":4,"id":0},{"text":"Industry","start":5,"end":13,"id":1},{"text":"Sets","start":14,"end":18,"id":2},{"text":"Its","start":19,"end":22,"id":3},{"text":"Sights","start":23,"end":29,"id":4},{"text":"on","start":30,"end":32,"id":5},{"text":"Gambling","start":33,"end":41,"id":6}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[123][0m {"text":"Techies Break a Fashion Taboo","meta":{"source":"The New York Times"},"_input_hash":1552816673,"_task_hash":1361874606,"tokens":[{"text":"Techies","start":0,"end":7,"id":0},{"text":"Break","start":8,"end":13,"id":1},{"text":"a","start":14,"end":15,"id":2},{"text":"Fashion","start":16,"end":23,"id":3},{"text":"Taboo","start":24,"end":29,"id":4}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[124][0m {"text":"Back to the Future: The Netscape and Google I.P.O.'s","meta":{"source":"The New York Times"},"_input_hash":-2064845347,"_task_hash":-1196154097,"tokens":[{"text":"Back","start":0,"end":4,"id":0},{"text":"to","start":5,"end":7,"id":1},{"text":"the","start":8,"end":11,"id":2},{"text":"Future","start":12,"end":18,"id":3},{"text":":","start":18,"end":19,"id":4},{"text":"The","start":20,"end":23,"id":5},{"text":"Netscape","start":24,"end":32,"id":6},{"text":"and","start":33,"end":36,"id":7},{"text":"Google","start":37,"end":43,"id":8},{"text":"I.P.O.","start":44,"end":50,"id":9},{"text":"'s","start":50,"end":52,"id":10}],"spans":[{"token_start":6,"token_end":6,"start":24,"end":32,"text":"Netscape","label":"ORG","source":"en_newshead_lg/","input_hash":-2064845347},{"token_start":8,"token_end":8,"start":37,"end":43,"text":"Google","label":"ORG","source":"en_newshead_lg/","input_hash":-2064845347}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: True
[35m[47m[125][0m {"text":"Where Are the Women Executives in Silicon Valley?","meta":{"source":"The New York Times"},"_input_hash":1237705928,"_task_hash":1854368814,"tokens":[{"text":"Where","start":0,"end":5,"id":0},{"text":"Are","start":6,"end":9,"id":1},{"text":"the","start":10,"end":13,"id":2},{"text":"Women","start":14,"end":19,"id":3},{"text":"Executives","start":20,"end":30,"id":4},{"text":"in","start":31,"end":33,"id":5},{"text":"Silicon","start":34,"end":41,"id":6},{"text":"Valley","start":42,"end":48,"id":7},{"text":"?","start":48,"end":49,"id":8}],"spans":[{"token_start":6,"token_end":7,"start":34,"end":48,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":1237705928}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[126][0m {"text":"For Buyers of Web Start-Ups, Quest to Corral Young Talent","meta":{"source":"The New York Times"},"_input_hash":2055194352,"_task_hash":761189001,"tokens":[{"text":"For","start":0,"end":3,"id":0},{"text":"Buyers","start":4,"end":10,"id":1},{"text":"of","start":11,"end":13,"id":2},{"text":"Web","start":14,"end":17,"id":3},{"text":"Start","start":18,"end":23,"id":4},{"text":"-","start":23,"end":24,"id":5},{"text":"Ups","start":24,"end":27,"id":6},{"text":",","start":27,"end":28,"id":7},{"text":"Quest","start":29,"end":34,"id":8},{"text":"to","start":35,"end":37,"id":9},{"text":"Corral","start":38,"end":44,"id":10},{"text":"Young","start":45,"end":50,"id":11},{"text":"Talent","start":51,"end":57,"id":12}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[127][0m {"text":"Digital Muse for Beat Poet","meta":{"source":"The New York Times"},"_input_hash":-2030476660,"_task_hash":-1115660655,"tokens":[{"text":"Digital","start":0,"end":7,"id":0},{"text":"Muse","start":8,"end":12,"id":1},{"text":"for","start":13,"end":16,"id":2},{"text":"Beat","start":17,"end":21,"id":3},{"text":"Poet","start":22,"end":26,"id":4}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[128][0m {"text":"Hostility Has Its Rewards","meta":{"source":"The New York Times"},"_input_hash":-440650415,"_task_hash":244981990,"tokens":[{"text":"Hostility","start":0,"end":9,"id":0},{"text":"Has","start":10,"end":13,"id":1},{"text":"Its","start":14,"end":17,"id":2},{"text":"Rewards","start":18,"end":25,"id":3}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[129][0m {"text":"Going Public Caps Dream for a Maker of Software","meta":{"source":"The New York Times"},"_input_hash":75826743,"_task_hash":84682686,"tokens":[{"text":"Going","start":0,"end":5,"id":0},{"text":"Public","start":6,"end":12,"id":1},{"text":"Caps","start":13,"end":17,"id":2},{"text":"Dream","start":18,"end":23,"id":3},{"text":"for","start":24,"end":27,"id":4},{"text":"a","start":28,"end":29,"id":5},{"text":"Maker","start":30,"end":35,"id":6},{"text":"of","start":36,"end":38,"id":7},{"text":"Software","start":39,"end":47,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[130][0m {"text":"Next Job for Obama? Silicon Valley Is Hiring","meta":{"source":"The New York Times"},"_input_hash":-959509063,"_task_hash":421476280,"tokens":[{"text":"Next","start":0,"end":4,"id":0},{"text":"Job","start":5,"end":8,"id":1},{"text":"for","start":9,"end":12,"id":2},{"text":"Obama","start":13,"end":18,"id":3},{"text":"?","start":18,"end":19,"id":4},{"text":"Silicon","start":20,"end":27,"id":5},{"text":"Valley","start":28,"end":34,"id":6},{"text":"Is","start":35,"end":37,"id":7},{"text":"Hiring","start":38,"end":44,"id":8}],"spans":[{"start":13,"end":18,"token_start":3,"token_end":3,"label":"ORG"},{"start":20,"end":34,"token_start":5,"token_end":6,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[131][0m {"text":"Airbnb and Others Set Terms for Employees to Cash Out","meta":{"source":"The New York Times"},"_input_hash":1008794851,"_task_hash":-228390072,"tokens":[{"text":"Airbnb","start":0,"end":6,"id":0},{"text":"and","start":7,"end":10,"id":1},{"text":"Others","start":11,"end":17,"id":2},{"text":"Set","start":18,"end":21,"id":3},{"text":"Terms","start":22,"end":27,"id":4},{"text":"for","start":28,"end":31,"id":5},{"text":"Employees","start":32,"end":41,"id":6},{"text":"to","start":42,"end":44,"id":7},{"text":"Cash","start":45,"end":49,"id":8},{"text":"Out","start":50,"end":53,"id":9}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":6,"text":"Airbnb","label":"ORG","source":"en_newshead_lg/","input_hash":1008794851}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[132][0m {"text":"Google and Apple: the High-Tech Hippies of Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":-1112867661,"_task_hash":-1534282818,"tokens":[{"text":"Google","start":0,"end":6,"id":0},{"text":"and","start":7,"end":10,"id":1},{"text":"Apple","start":11,"end":16,"id":2},{"text":":","start":16,"end":17,"id":3},{"text":"the","start":18,"end":21,"id":4},{"text":"High","start":22,"end":26,"id":5},{"text":"-","start":26,"end":27,"id":6},{"text":"Tech","start":27,"end":31,"id":7},{"text":"Hippies","start":32,"end":39,"id":8},{"text":"of","start":40,"end":42,"id":9},{"text":"Silicon","start":43,"end":50,"id":10},{"text":"Valley","start":51,"end":57,"id":11}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":6,"text":"Google","label":"ORG","source":"en_newshead_lg/","input_hash":-1112867661},{"token_start":2,"token_end":2,"start":11,"end":16,"text":"Apple","label":"ORG","source":"en_newshead_lg/","input_hash":-1112867661},{"token_start":10,"token_end":11,"start":43,"end":57,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1112867661}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[133][0m {"text":"Silicon Valley, Seeking Diversity, Focuses on Blacks","meta":{"source":"The New York Times"},"_input_hash":1437244679,"_task_hash":458959882,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":",","start":14,"end":15,"id":2},{"text":"Seeking","start":16,"end":23,"id":3},{"text":"Diversity","start":24,"end":33,"id":4},{"text":",","start":33,"end":34,"id":5},{"text":"Focuses","start":35,"end":42,"id":6},{"text":"on","start":43,"end":45,"id":7},{"text":"Blacks","start":46,"end":52,"id":8}],"spans":[{"token_start":0,"token_end":1,"start":0,"end":14,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":1437244679}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[134][0m {"text":"As More Tech Start-Ups Stay Private, So Does the Money","meta":{"source":"The New York Times"},"_input_hash":472774840,"_task_hash":-541461839,"tokens":[{"text":"As","start":0,"end":2,"id":0},{"text":"More","start":3,"end":7,"id":1},{"text":"Tech","start":8,"end":12,"id":2},{"text":"Start","start":13,"end":18,"id":3},{"text":"-","start":18,"end":19,"id":4},{"text":"Ups","start":19,"end":22,"id":5},{"text":"Stay","start":23,"end":27,"id":6},{"text":"Private","start":28,"end":35,"id":7},{"text":",","start":35,"end":36,"id":8},{"text":"So","start":37,"end":39,"id":9},{"text":"Does","start":40,"end":44,"id":10},{"text":"the","start":45,"end":48,"id":11},{"text":"Money","start":49,"end":54,"id":12}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[135][0m {"text":"Want a Steady Income? There\u2019s an App for That","meta":{"source":"The New York Times"},"_input_hash":1990580183,"_task_hash":1970690705,"tokens":[{"text":"Want","start":0,"end":4,"id":0},{"text":"a","start":5,"end":6,"id":1},{"text":"Steady","start":7,"end":13,"id":2},{"text":"Income","start":14,"end":20,"id":3},{"text":"?","start":20,"end":21,"id":4},{"text":"There","start":22,"end":27,"id":5},{"text":"\u2019s","start":27,"end":29,"id":6},{"text":"an","start":30,"end":32,"id":7},{"text":"App","start":33,"end":36,"id":8},{"text":"for","start":37,"end":40,"id":9},{"text":"That","start":41,"end":45,"id":10}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[136][0m {"text":"Investing Early On for Insights, Not Profits","meta":{"source":"The New York Times"},"_input_hash":-409413333,"_task_hash":1178635996,"tokens":[{"text":"Investing","start":0,"end":9,"id":0},{"text":"Early","start":10,"end":15,"id":1},{"text":"On","start":16,"end":18,"id":2},{"text":"for","start":19,"end":22,"id":3},{"text":"Insights","start":23,"end":31,"id":4},{"text":",","start":31,"end":32,"id":5},{"text":"Not","start":33,"end":36,"id":6},{"text":"Profits","start":37,"end":44,"id":7}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[137][0m {"text":"Angel Investors Lend Expertise as Well as Cash","meta":{"source":"The New York Times"},"_input_hash":1508411120,"_task_hash":932890185,"tokens":[{"text":"Angel","start":0,"end":5,"id":0},{"text":"Investors","start":6,"end":15,"id":1},{"text":"Lend","start":16,"end":20,"id":2},{"text":"Expertise","start":21,"end":30,"id":3},{"text":"as","start":31,"end":33,"id":4},{"text":"Well","start":34,"end":38,"id":5},{"text":"as","start":39,"end":41,"id":6},{"text":"Cash","start":42,"end":46,"id":7}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[138][0m {"text":"Deal Makers Invade CES, the Land of Geeks","meta":{"source":"The New York Times"},"_input_hash":463527014,"_task_hash":353573632,"tokens":[{"text":"Deal","start":0,"end":4,"id":0},{"text":"Makers","start":5,"end":11,"id":1},{"text":"Invade","start":12,"end":18,"id":2},{"text":"CES","start":19,"end":22,"id":3},{"text":",","start":22,"end":23,"id":4},{"text":"the","start":24,"end":27,"id":5},{"text":"Land","start":28,"end":32,"id":6},{"text":"of","start":33,"end":35,"id":7},{"text":"Geeks","start":36,"end":41,"id":8}],"spans":[{"start":19,"end":22,"token_start":3,"token_end":3,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[139][0m {"text":"In Surveillance Debate, White House Turns Its Focus to Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":501071992,"_task_hash":-1731865325,"tokens":[{"text":"In","start":0,"end":2,"id":0},{"text":"Surveillance","start":3,"end":15,"id":1},{"text":"Debate","start":16,"end":22,"id":2},{"text":",","start":22,"end":23,"id":3},{"text":"White","start":24,"end":29,"id":4},{"text":"House","start":30,"end":35,"id":5},{"text":"Turns","start":36,"end":41,"id":6},{"text":"Its","start":42,"end":45,"id":7},{"text":"Focus","start":46,"end":51,"id":8},{"text":"to","start":52,"end":54,"id":9},{"text":"Silicon","start":55,"end":62,"id":10},{"text":"Valley","start":63,"end":69,"id":11}],"spans":[{"token_start":4,"token_end":5,"start":24,"end":35,"text":"White House","label":"LOCATION","source":"en_newshead_lg/","input_hash":501071992},{"token_start":10,"token_end":11,"start":55,"end":69,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":501071992}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[140][0m {"text":"Silicon Valley\u2019s Youth Problem","meta":{"source":"The New York Times"},"_input_hash":-807556982,"_task_hash":617821078,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"\u2019s","start":14,"end":16,"id":2},{"text":"Youth","start":17,"end":22,"id":3},{"text":"Problem","start":23,"end":30,"id":4}],"spans":[{"token_start":0,"token_end":1,"start":0,"end":14,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-807556982}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[141][0m {"text":"Zuckerberg Remains the Undisputed Boss at Facebook","meta":{"source":"The New York Times"},"_input_hash":-364451464,"_task_hash":1409317136,"tokens":[{"text":"Zuckerberg","start":0,"end":10,"id":0},{"text":"Remains","start":11,"end":18,"id":1},{"text":"the","start":19,"end":22,"id":2},{"text":"Undisputed","start":23,"end":33,"id":3},{"text":"Boss","start":34,"end":38,"id":4},{"text":"at","start":39,"end":41,"id":5},{"text":"Facebook","start":42,"end":50,"id":6}],"spans":[{"start":0,"end":10,"token_start":0,"token_end":0,"label":"PERSON"},{"start":42,"end":50,"token_start":6,"token_end":6,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[142][0m {"text":"A Corporate Campus Made to Mirror Facebook","meta":{"source":"The New York Times"},"_input_hash":418081382,"_task_hash":555322905,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Corporate","start":2,"end":11,"id":1},{"text":"Campus","start":12,"end":18,"id":2},{"text":"Made","start":19,"end":23,"id":3},{"text":"to","start":24,"end":26,"id":4},{"text":"Mirror","start":27,"end":33,"id":5},{"text":"Facebook","start":34,"end":42,"id":6}],"spans":[{"start":34,"end":42,"token_start":6,"token_end":6,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[143][0m {"text":"One on One: Tim Wu, Author of 'The Master Switch'","meta":{"source":"The New York Times"},"_input_hash":332710469,"_task_hash":1839237117,"tokens":[{"text":"One","start":0,"end":3,"id":0},{"text":"on","start":4,"end":6,"id":1},{"text":"One","start":7,"end":10,"id":2},{"text":":","start":10,"end":11,"id":3},{"text":"Tim","start":12,"end":15,"id":4},{"text":"Wu","start":16,"end":18,"id":5},{"text":",","start":18,"end":19,"id":6},{"text":"Author","start":20,"end":26,"id":7},{"text":"of","start":27,"end":29,"id":8},{"text":"'","start":30,"end":31,"id":9},{"text":"The","start":31,"end":34,"id":10},{"text":"Master","start":35,"end":41,"id":11},{"text":"Switch","start":42,"end":48,"id":12},{"text":"'","start":48,"end":49,"id":13}],"spans":[{"token_start":4,"token_end":5,"start":12,"end":18,"text":"Tim Wu","label":"PERSON","source":"en_newshead_lg/","input_hash":332710469}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[144][0m {"text":"Spinning the Web: P.R. in Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":1451599498,"_task_hash":-1737636608,"tokens":[{"text":"Spinning","start":0,"end":8,"id":0},{"text":"the","start":9,"end":12,"id":1},{"text":"Web","start":13,"end":16,"id":2},{"text":":","start":16,"end":17,"id":3},{"text":"P.R.","start":18,"end":22,"id":4},{"text":"in","start":23,"end":25,"id":5},{"text":"Silicon","start":26,"end":33,"id":6},{"text":"Valley","start":34,"end":40,"id":7}],"spans":[{"token_start":6,"token_end":7,"start":26,"end":40,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":1451599498}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[145][0m {"text":"To Survive, Net Start-Ups Slow Their Metabolism","meta":{"source":"The New York Times"},"_input_hash":1118559184,"_task_hash":-143463029,"tokens":[{"text":"To","start":0,"end":2,"id":0},{"text":"Survive","start":3,"end":10,"id":1},{"text":",","start":10,"end":11,"id":2},{"text":"Net","start":12,"end":15,"id":3},{"text":"Start","start":16,"end":21,"id":4},{"text":"-","start":21,"end":22,"id":5},{"text":"Ups","start":22,"end":25,"id":6},{"text":"Slow","start":26,"end":30,"id":7},{"text":"Their","start":31,"end":36,"id":8},{"text":"Metabolism","start":37,"end":47,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[146][0m {"text":"Attending to the Needs of the Too-Busy","meta":{"source":"The New York Times"},"_input_hash":544530596,"_task_hash":-351814859,"tokens":[{"text":"Attending","start":0,"end":9,"id":0},{"text":"to","start":10,"end":12,"id":1},{"text":"the","start":13,"end":16,"id":2},{"text":"Needs","start":17,"end":22,"id":3},{"text":"of","start":23,"end":25,"id":4},{"text":"the","start":26,"end":29,"id":5},{"text":"Too","start":30,"end":33,"id":6},{"text":"-","start":33,"end":34,"id":7},{"text":"Busy","start":34,"end":38,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[147][0m {"text":"Silicon Valley Start-Ups Awash in Dollars, Again","meta":{"source":"The New York Times"},"_input_hash":717271911,"_task_hash":1996914334,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"Start","start":15,"end":20,"id":2},{"text":"-","start":20,"end":21,"id":3},{"text":"Ups","start":21,"end":24,"id":4},{"text":"Awash","start":25,"end":30,"id":5},{"text":"in","start":31,"end":33,"id":6},{"text":"Dollars","start":34,"end":41,"id":7},{"text":",","start":41,"end":42,"id":8},{"text":"Again","start":43,"end":48,"id":9}],"spans":[{"token_start":0,"token_end":1,"start":0,"end":14,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":717271911}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[148][0m {"text":"New Social Sites Cater to People of a Certain Age","meta":{"source":"The New York Times"},"_input_hash":-1301490427,"_task_hash":1370110064,"tokens":[{"text":"New","start":0,"end":3,"id":0},{"text":"Social","start":4,"end":10,"id":1},{"text":"Sites","start":11,"end":16,"id":2},{"text":"Cater","start":17,"end":22,"id":3},{"text":"to","start":23,"end":25,"id":4},{"text":"People","start":26,"end":32,"id":5},{"text":"of","start":33,"end":35,"id":6},{"text":"a","start":36,"end":37,"id":7},{"text":"Certain","start":38,"end":45,"id":8},{"text":"Age","start":46,"end":49,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[149][0m {"text":"Demand for Data Puts Engineers in Spotlight","meta":{"source":"The New York Times"},"_input_hash":1332867413,"_task_hash":-959569942,"tokens":[{"text":"Demand","start":0,"end":6,"id":0},{"text":"for","start":7,"end":10,"id":1},{"text":"Data","start":11,"end":15,"id":2},{"text":"Puts","start":16,"end":20,"id":3},{"text":"Engineers","start":21,"end":30,"id":4},{"text":"in","start":31,"end":33,"id":5},{"text":"Spotlight","start":34,"end":43,"id":6}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[150][0m {"text":"Yahoo Sale Could Be Bad for Minnows","meta":{"source":"The New York Times"},"_input_hash":868313197,"_task_hash":43252425,"tokens":[{"text":"Yahoo","start":0,"end":5,"id":0},{"text":"Sale","start":6,"end":10,"id":1},{"text":"Could","start":11,"end":16,"id":2},{"text":"Be","start":17,"end":19,"id":3},{"text":"Bad","start":20,"end":23,"id":4},{"text":"for","start":24,"end":27,"id":5},{"text":"Minnows","start":28,"end":35,"id":6}],"spans":[{"start":0,"end":5,"token_start":0,"token_end":0,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[151][0m {"text":"Silicon Valley Helped Create Trump, and That\u2019s Bad for It","meta":{"source":"The New York Times"},"_input_hash":-986348997,"_task_hash":765536494,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"Helped","start":15,"end":21,"id":2},{"text":"Create","start":22,"end":28,"id":3},{"text":"Trump","start":29,"end":34,"id":4},{"text":",","start":34,"end":35,"id":5},{"text":"and","start":36,"end":39,"id":6},{"text":"That","start":40,"end":44,"id":7},{"text":"\u2019s","start":44,"end":46,"id":8},{"text":"Bad","start":47,"end":50,"id":9},{"text":"for","start":51,"end":54,"id":10},{"text":"It","start":55,"end":57,"id":11}],"spans":[{"start":0,"end":14,"token_start":0,"token_end":1,"label":"LOCATION"},{"start":29,"end":34,"token_start":4,"token_end":4,"label":"PERSON"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[152][0m {"text":"Peter Thiel\u2019s Embrace of Trump Has Silicon Valley Squirming","meta":{"source":"The New York Times"},"_input_hash":-1187130807,"_task_hash":-2127748925,"tokens":[{"text":"Peter","start":0,"end":5,"id":0},{"text":"Thiel","start":6,"end":11,"id":1},{"text":"\u2019s","start":11,"end":13,"id":2},{"text":"Embrace","start":14,"end":21,"id":3},{"text":"of","start":22,"end":24,"id":4},{"text":"Trump","start":25,"end":30,"id":5},{"text":"Has","start":31,"end":34,"id":6},{"text":"Silicon","start":35,"end":42,"id":7},{"text":"Valley","start":43,"end":49,"id":8},{"text":"Squirming","start":50,"end":59,"id":9}],"spans":[{"token_start":0,"token_end":1,"start":0,"end":11,"text":"Peter Thiel","label":"PERSON","source":"en_newshead_lg/","input_hash":-1187130807},{"token_start":5,"token_end":5,"start":25,"end":30,"text":"Trump","label":"PERSON","source":"en_newshead_lg/","input_hash":-1187130807},{"token_start":7,"token_end":8,"start":35,"end":49,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1187130807}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[153][0m {"text":"In Silicon Valley, a Divide in Income and Politics","meta":{"source":"The New York Times"},"_input_hash":47409220,"_task_hash":1792786485,"tokens":[{"text":"In","start":0,"end":2,"id":0},{"text":"Silicon","start":3,"end":10,"id":1},{"text":"Valley","start":11,"end":17,"id":2},{"text":",","start":17,"end":18,"id":3},{"text":"a","start":19,"end":20,"id":4},{"text":"Divide","start":21,"end":27,"id":5},{"text":"in","start":28,"end":30,"id":6},{"text":"Income","start":31,"end":37,"id":7},{"text":"and","start":38,"end":41,"id":8},{"text":"Politics","start":42,"end":50,"id":9}],"spans":[{"token_start":1,"token_end":2,"start":3,"end":17,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":47409220}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}


[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[154][0m {"text":"The Art of Failing Upward","meta":{"source":"The New York Times"},"_input_hash":-1343496217,"_task_hash":-1070796890,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Art","start":4,"end":7,"id":1},{"text":"of","start":8,"end":10,"id":2},{"text":"Failing","start":11,"end":18,"id":3},{"text":"Upward","start":19,"end":25,"id":4}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[155][0m {"text":"Daily Report: The Tech News Cycle is About to Ramp Up","meta":{"source":"The New York Times"},"_input_hash":-2113895051,"_task_hash":-1709219656,"tokens":[{"text":"Daily","start":0,"end":5,"id":0},{"text":"Report","start":6,"end":12,"id":1},{"text":":","start":12,"end":13,"id":2},{"text":"The","start":14,"end":17,"id":3},{"text":"Tech","start":18,"end":22,"id":4},{"text":"News","start":23,"end":27,"id":5},{"text":"Cycle","start":28,"end":33,"id":6},{"text":"is","start":34,"end":36,"id":7},{"text":"About","start":37,"end":42,"id":8},{"text":"to","start":43,"end":45,"id":9},{"text":"Ramp","start":46,"end":50,"id":10},{"text":"Up","start":51,"end":53,"id":11}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: True
[35m[47m[156][0m {"text":"Netromancy","meta":{"source":"The New York Times"},"_input_hash":208310363,"_task_hash":-1683605813,"tokens":[{"text":"Netromancy","start":0,"end":10,"id":0}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[157][0m {"text":"Unicorns Hunt for Talent Among Silicon Valley\u2019s Giants","meta":{"source":"The New York Times"},"_input_hash":769040583,"_task_hash":-1597665254,"tokens":[{"text":"Unicorns","start":0,"end":8,"id":0},{"text":"Hunt","start":9,"end":13,"id":1},{"text":"for","start":14,"end":17,"id":2},{"text":"Talent","start":18,"end":24,"id":3},{"text":"Among","start":25,"end":30,"id":4},{"text":"Silicon","start":31,"end":38,"id":5},{"text":"Valley","start":39,"end":45,"id":6},{"text":"\u2019s","start":45,"end":47,"id":7},{"text":"Giants","start":48,"end":54,"id":8}],"spans":[{"token_start":5,"token_end":6,"start":31,"end":45,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":769040583}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[158][0m {"text":"Overvalued in Silicon Valley, but Don\u2019t Say \u2018Tech Bubble\u2019","meta":{"source":"The New York Times"},"_input_hash":294335025,"_task_hash":-1613894271,"tokens":[{"text":"Overvalued","start":0,"end":10,"id":0},{"text":"in","start":11,"end":13,"id":1},{"text":"Silicon","start":14,"end":21,"id":2},{"text":"Valley","start":22,"end":28,"id":3},{"text":",","start":28,"end":29,"id":4},{"text":"but","start":30,"end":33,"id":5},{"text":"Do","start":34,"end":36,"id":6},{"text":"n\u2019t","start":36,"end":39,"id":7},{"text":"Say","start":40,"end":43,"id":8},{"text":"\u2018","start":44,"end":45,"id":9},{"text":"Tech","start":45,"end":49,"id":10},{"text":"Bubble","start":50,"end":56,"id":11},{"text":"\u2019","start":56,"end":57,"id":12}],"spans":[{"token_start":2,"token_end":3,"start":14,"end":28,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":294335025}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[159][0m {"text":"Managers Turn to Computer Games, Aiming for More Efficient Employees","meta":{"source":"The New York Times"},"_input_hash":-87314011,"_task_hash":-260998654,"tokens":[{"text":"Managers","start":0,"end":8,"id":0},{"text":"Turn","start":9,"end":13,"id":1},{"text":"to","start":14,"end":16,"id":2},{"text":"Computer","start":17,"end":25,"id":3},{"text":"Games","start":26,"end":31,"id":4},{"text":",","start":31,"end":32,"id":5},{"text":"Aiming","start":33,"end":39,"id":6},{"text":"for","start":40,"end":43,"id":7},{"text":"More","start":44,"end":48,"id":8},{"text":"Efficient","start":49,"end":58,"id":9},{"text":"Employees","start":59,"end":68,"id":10}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[160][0m {"text":"Stanford Women and Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":2042767853,"_task_hash":-1586775345,"tokens":[{"text":"Stanford","start":0,"end":8,"id":0},{"text":"Women","start":9,"end":14,"id":1},{"text":"and","start":15,"end":18,"id":2},{"text":"Silicon","start":19,"end":26,"id":3},{"text":"Valley","start":27,"end":33,"id":4}],"spans":[{"start":0,"end":8,"token_start":0,"token_end":0,"label":"ORG"},{"start":19,"end":33,"token_start":3,"token_end":4,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[161][0m {"text":"What It Means to Be a \u2018Dad\u2019","meta":{"source":"The New York Times"},"_input_hash":-1754455291,"_task_hash":1073355652,"tokens":[{"text":"What","start":0,"end":4,"id":0},{"text":"It","start":5,"end":7,"id":1},{"text":"Means","start":8,"end":13,"id":2},{"text":"to","start":14,"end":16,"id":3},{"text":"Be","start":17,"end":19,"id":4},{"text":"a","start":20,"end":21,"id":5},{"text":"\u2018","start":22,"end":23,"id":6},{"text":"Dad","start":23,"end":26,"id":7},{"text":"\u2019","start":26,"end":27,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[162][0m {"text":"A Golden Age of Design","meta":{"source":"The New York Times"},"_input_hash":666842290,"_task_hash":1259623827,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Golden","start":2,"end":8,"id":1},{"text":"Age","start":9,"end":12,"id":2},{"text":"of","start":13,"end":15,"id":3},{"text":"Design","start":16,"end":22,"id":4}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[163][0m {"text":"Court Rejects Deal on Hiring in Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":1409902504,"_task_hash":-517566663,"tokens":[{"text":"Court","start":0,"end":5,"id":0},{"text":"Rejects","start":6,"end":13,"id":1},{"text":"Deal","start":14,"end":18,"id":2},{"text":"on","start":19,"end":21,"id":3},{"text":"Hiring","start":22,"end":28,"id":4},{"text":"in","start":29,"end":31,"id":5},{"text":"Silicon","start":32,"end":39,"id":6},{"text":"Valley","start":40,"end":46,"id":7}],"spans":[{"token_start":6,"token_end":7,"start":32,"end":46,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":1409902504}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[164][0m {"text":"What the Beats Deal Says About Apple: It Loves Tastemakers","meta":{"source":"The New York Times"},"_input_hash":-1759312110,"_task_hash":1213649160,"tokens":[{"text":"What","start":0,"end":4,"id":0},{"text":"the","start":5,"end":8,"id":1},{"text":"Beats","start":9,"end":14,"id":2},{"text":"Deal","start":15,"end":19,"id":3},{"text":"Says","start":20,"end":24,"id":4},{"text":"About","start":25,"end":30,"id":5},{"text":"Apple","start":31,"end":36,"id":6},{"text":":","start":36,"end":37,"id":7},{"text":"It","start":38,"end":40,"id":8},{"text":"Loves","start":41,"end":46,"id":9},{"text":"Tastemakers","start":47,"end":58,"id":10}],"spans":[{"start":9,"end":14,"token_start":2,"token_end":2,"label":"ORG"},{"start":31,"end":36,"token_start":6,"token_end":6,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[165][0m {"text":"Search for a Market Niche, and You Might Find a Crowd","meta":{"source":"The New York Times"},"_input_hash":319093284,"_task_hash":-501223930,"tokens":[{"text":"Search","start":0,"end":6,"id":0},{"text":"for","start":7,"end":10,"id":1},{"text":"a","start":11,"end":12,"id":2},{"text":"Market","start":13,"end":19,"id":3},{"text":"Niche","start":20,"end":25,"id":4},{"text":",","start":25,"end":26,"id":5},{"text":"and","start":27,"end":30,"id":6},{"text":"You","start":31,"end":34,"id":7},{"text":"Might","start":35,"end":40,"id":8},{"text":"Find","start":41,"end":45,"id":9},{"text":"a","start":46,"end":47,"id":10},{"text":"Crowd","start":48,"end":53,"id":11}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[166][0m {"text":"Search for the 'Next Big Thing' Yields Soaring Valuations","meta":{"source":"The New York Times"},"_input_hash":677843916,"_task_hash":-587793934,"tokens":[{"text":"Search","start":0,"end":6,"id":0},{"text":"for","start":7,"end":10,"id":1},{"text":"the","start":11,"end":14,"id":2},{"text":"'","start":15,"end":16,"id":3},{"text":"Next","start":16,"end":20,"id":4},{"text":"Big","start":21,"end":24,"id":5},{"text":"Thing","start":25,"end":30,"id":6},{"text":"'","start":30,"end":31,"id":7},{"text":"Yields","start":32,"end":38,"id":8},{"text":"Soaring","start":39,"end":46,"id":9},{"text":"Valuations","start":47,"end":57,"id":10}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[167][0m {"text":"Shifting Tech Scene Unsettles Big Players","meta":{"source":"The New York Times"},"_input_hash":1532781460,"_task_hash":385395747,"tokens":[{"text":"Shifting","start":0,"end":8,"id":0},{"text":"Tech","start":9,"end":13,"id":1},{"text":"Scene","start":14,"end":19,"id":2},{"text":"Unsettles","start":20,"end":29,"id":3},{"text":"Big","start":30,"end":33,"id":4},{"text":"Players","start":34,"end":41,"id":5}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[168][0m {"text":"Silicon Valley\u2019s Start-Up Machine","meta":{"source":"The New York Times"},"_input_hash":348423377,"_task_hash":-1931646593,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"\u2019s","start":14,"end":16,"id":2},{"text":"Start","start":17,"end":22,"id":3},{"text":"-","start":22,"end":23,"id":4},{"text":"Up","start":23,"end":25,"id":5},{"text":"Machine","start":26,"end":33,"id":6}],"spans":[{"token_start":0,"token_end":1,"start":0,"end":14,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":348423377}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[169][0m {"text":"Opening a Gateway for Girls to Enter the Computer Field","meta":{"source":"The New York Times"},"_input_hash":-296335333,"_task_hash":-1018503122,"tokens":[{"text":"Opening","start":0,"end":7,"id":0},{"text":"a","start":8,"end":9,"id":1},{"text":"Gateway","start":10,"end":17,"id":2},{"text":"for","start":18,"end":21,"id":3},{"text":"Girls","start":22,"end":27,"id":4},{"text":"to","start":28,"end":30,"id":5},{"text":"Enter","start":31,"end":36,"id":6},{"text":"the","start":37,"end":40,"id":7},{"text":"Computer","start":41,"end":49,"id":8},{"text":"Field","start":50,"end":55,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[170][0m {"text":"Silicon Valley Says Step Away From the Device","meta":{"source":"The New York Times"},"_input_hash":873990331,"_task_hash":1252084130,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"Says","start":15,"end":19,"id":2},{"text":"Step","start":20,"end":24,"id":3},{"text":"Away","start":25,"end":29,"id":4},{"text":"From","start":30,"end":34,"id":5},{"text":"the","start":35,"end":38,"id":6},{"text":"Device","start":39,"end":45,"id":7}],"spans":[{"token_start":0,"token_end":1,"start":0,"end":14,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":873990331}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[171][0m {"text":"Like the Apple Store Nearby, but This One Has Windows","meta":{"source":"The New York Times"},"_input_hash":-547571496,"_task_hash":-574377148,"tokens":[{"text":"Like","start":0,"end":4,"id":0},{"text":"the","start":5,"end":8,"id":1},{"text":"Apple","start":9,"end":14,"id":2},{"text":"Store","start":15,"end":20,"id":3},{"text":"Nearby","start":21,"end":27,"id":4},{"text":",","start":27,"end":28,"id":5},{"text":"but","start":29,"end":32,"id":6},{"text":"This","start":33,"end":37,"id":7},{"text":"One","start":38,"end":41,"id":8},{"text":"Has","start":42,"end":45,"id":9},{"text":"Windows","start":46,"end":53,"id":10}],"spans":[{"start":9,"end":14,"token_start":2,"token_end":2,"label":"ORG"},{"start":46,"end":53,"token_start":10,"token_end":10,"label":"PRODUCT"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[172][0m {"text":"A King of Connections Is Tech\u2019s Go-To Guy","meta":{"source":"The New York Times"},"_input_hash":1774105665,"_task_hash":-2138229989,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"King","start":2,"end":6,"id":1},{"text":"of","start":7,"end":9,"id":2},{"text":"Connections","start":10,"end":21,"id":3},{"text":"Is","start":22,"end":24,"id":4},{"text":"Tech","start":25,"end":29,"id":5},{"text":"\u2019s","start":29,"end":31,"id":6},{"text":"Go","start":32,"end":34,"id":7},{"text":"-","start":34,"end":35,"id":8},{"text":"To","start":35,"end":37,"id":9},{"text":"Guy","start":38,"end":41,"id":10}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[173][0m {"text":"One on One: Jaron Lanier","meta":{"source":"The New York Times"},"_input_hash":1052406972,"_task_hash":1167797498,"tokens":[{"text":"One","start":0,"end":3,"id":0},{"text":"on","start":4,"end":6,"id":1},{"text":"One","start":7,"end":10,"id":2},{"text":":","start":10,"end":11,"id":3},{"text":"Jaron","start":12,"end":17,"id":4},{"text":"Lanier","start":18,"end":24,"id":5}],"spans":[{"token_start":4,"token_end":5,"start":12,"end":24,"text":"Jaron Lanier","label":"PERSON","source":"en_newshead_lg/","input_hash":1052406972}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[174][0m {"text":"6 Months, $90,000 and (Maybe) a Great Idea","meta":{"source":"The New York Times"},"_input_hash":316099482,"_task_hash":-2071895117,"tokens":[{"text":"6","start":0,"end":1,"id":0},{"text":"Months","start":2,"end":8,"id":1},{"text":",","start":8,"end":9,"id":2},{"text":"$","start":10,"end":11,"id":3},{"text":"90,000","start":11,"end":17,"id":4},{"text":"and","start":18,"end":21,"id":5},{"text":"(","start":22,"end":23,"id":6},{"text":"Maybe","start":23,"end":28,"id":7},{"text":")","start":28,"end":29,"id":8},{"text":"a","start":30,"end":31,"id":9},{"text":"Great","start":32,"end":37,"id":10},{"text":"Idea","start":38,"end":42,"id":11}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[175][0m {"text":"Microsoft\u2019s Failed Yahoo Bid Risks Online Growth","meta":{"source":"The New York Times"},"_input_hash":1304972485,"_task_hash":245711498,"tokens":[{"text":"Microsoft","start":0,"end":9,"id":0},{"text":"\u2019s","start":9,"end":11,"id":1},{"text":"Failed","start":12,"end":18,"id":2},{"text":"Yahoo","start":19,"end":24,"id":3},{"text":"Bid","start":25,"end":28,"id":4},{"text":"Risks","start":29,"end":34,"id":5},{"text":"Online","start":35,"end":41,"id":6},{"text":"Growth","start":42,"end":48,"id":7}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":9,"text":"Microsoft","label":"ORG","source":"en_newshead_lg/","input_hash":1304972485},{"token_start":3,"token_end":3,"start":19,"end":24,"text":"Yahoo","label":"ORG","source":"en_newshead_lg/","input_hash":1304972485}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[176][0m {"text":"Why Old Technologies Are Still Kicking","meta":{"source":"The New York Times"},"_input_hash":782066879,"_task_hash":-1105592760,"tokens":[{"text":"Why","start":0,"end":3,"id":0},{"text":"Old","start":4,"end":7,"id":1},{"text":"Technologies","start":8,"end":20,"id":2},{"text":"Are","start":21,"end":24,"id":3},{"text":"Still","start":25,"end":30,"id":4},{"text":"Kicking","start":31,"end":38,"id":5}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[177][0m {"text":"Trying to Add a Pulse to a World of Machines","meta":{"source":"The New York Times"},"_input_hash":-1082120111,"_task_hash":-790351062,"tokens":[{"text":"Trying","start":0,"end":6,"id":0},{"text":"to","start":7,"end":9,"id":1},{"text":"Add","start":10,"end":13,"id":2},{"text":"a","start":14,"end":15,"id":3},{"text":"Pulse","start":16,"end":21,"id":4},{"text":"to","start":22,"end":24,"id":5},{"text":"a","start":25,"end":26,"id":6},{"text":"World","start":27,"end":32,"id":7},{"text":"of","start":33,"end":35,"id":8},{"text":"Machines","start":36,"end":44,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[178][0m {"text":"There Is a Reason Tech Isn\u2019t Safe","meta":{"source":"The New York Times"},"_input_hash":1883218414,"_task_hash":-74056692,"tokens":[{"text":"There","start":0,"end":5,"id":0},{"text":"Is","start":6,"end":8,"id":1},{"text":"a","start":9,"end":10,"id":2},{"text":"Reason","start":11,"end":17,"id":3},{"text":"Tech","start":18,"end":22,"id":4},{"text":"Is","start":23,"end":25,"id":5},{"text":"n\u2019t","start":25,"end":28,"id":6},{"text":"Safe","start":29,"end":33,"id":7}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[179][0m {"text":"A Few Cities Have Cornered Innovation Jobs. Can That Be Changed?","meta":{"source":"The New York Times"},"_input_hash":-1228660640,"_task_hash":-1075116856,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Few","start":2,"end":5,"id":1},{"text":"Cities","start":6,"end":12,"id":2},{"text":"Have","start":13,"end":17,"id":3},{"text":"Cornered","start":18,"end":26,"id":4},{"text":"Innovation","start":27,"end":37,"id":5},{"text":"Jobs","start":38,"end":42,"id":6},{"text":".","start":42,"end":43,"id":7},{"text":"Can","start":44,"end":47,"id":8},{"text":"That","start":48,"end":52,"id":9},{"text":"Be","start":53,"end":55,"id":10},{"text":"Changed","start":56,"end":63,"id":11},{"text":"?","start":63,"end":64,"id":12}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[180][0m {"text":"\u2018Silicon Valley,\u2019 Darker Than Ever, Captures the Bleak Mood of Tech","meta":{"source":"The New York Times"},"_input_hash":-648554420,"_task_hash":-805323715,"tokens":[{"text":"\u2018","start":0,"end":1,"id":0},{"text":"Silicon","start":1,"end":8,"id":1},{"text":"Valley","start":9,"end":15,"id":2},{"text":",","start":15,"end":16,"id":3},{"text":"\u2019","start":16,"end":17,"id":4},{"text":"Darker","start":18,"end":24,"id":5},{"text":"Than","start":25,"end":29,"id":6},{"text":"Ever","start":30,"end":34,"id":7},{"text":",","start":34,"end":35,"id":8},{"text":"Captures","start":36,"end":44,"id":9},{"text":"the","start":45,"end":48,"id":10},{"text":"Bleak","start":49,"end":54,"id":11},{"text":"Mood","start":55,"end":59,"id":12},{"text":"of","start":60,"end":62,"id":13},{"text":"Tech","start":63,"end":67,"id":14}],"spans":[{"token_start":1,"token_end":2,"start":1,"end":15,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-648554420}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[181][0m {"text":"Apple Commits $2.5 Billion to Ease California Housing Crunch","meta":{"source":"The New York Times"},"_input_hash":-1195658338,"_task_hash":-2095976360,"tokens":[{"text":"Apple","start":0,"end":5,"id":0},{"text":"Commits","start":6,"end":13,"id":1},{"text":"$","start":14,"end":15,"id":2},{"text":"2.5","start":15,"end":18,"id":3},{"text":"Billion","start":19,"end":26,"id":4},{"text":"to","start":27,"end":29,"id":5},{"text":"Ease","start":30,"end":34,"id":6},{"text":"California","start":35,"end":45,"id":7},{"text":"Housing","start":46,"end":53,"id":8},{"text":"Crunch","start":54,"end":60,"id":9}],"spans":[{"start":0,"end":5,"token_start":0,"token_end":0,"label":"ORG"},{"start":35,"end":45,"token_start":7,"token_end":7,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[182][0m {"text":"How Much Watching Time Do You Have This Weekend?","meta":{"source":"The New York Times"},"_input_hash":-907524080,"_task_hash":792102842,"tokens":[{"text":"How","start":0,"end":3,"id":0},{"text":"Much","start":4,"end":8,"id":1},{"text":"Watching","start":9,"end":17,"id":2},{"text":"Time","start":18,"end":22,"id":3},{"text":"Do","start":23,"end":25,"id":4},{"text":"You","start":26,"end":29,"id":5},{"text":"Have","start":30,"end":34,"id":6},{"text":"This","start":35,"end":39,"id":7},{"text":"Weekend","start":40,"end":47,"id":8},{"text":"?","start":47,"end":48,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[183][0m {"text":"The Latest Entry in the True-Crime Serial Market: Copcasts","meta":{"source":"The New York Times"},"_input_hash":-667614701,"_task_hash":850621087,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Latest","start":4,"end":10,"id":1},{"text":"Entry","start":11,"end":16,"id":2},{"text":"in","start":17,"end":19,"id":3},{"text":"the","start":20,"end":23,"id":4},{"text":"True","start":24,"end":28,"id":5},{"text":"-","start":28,"end":29,"id":6},{"text":"Crime","start":29,"end":34,"id":7},{"text":"Serial","start":35,"end":41,"id":8},{"text":"Market","start":42,"end":48,"id":9},{"text":":","start":48,"end":49,"id":10},{"text":"Copcasts","start":50,"end":58,"id":11}],"spans":[{"start":50,"end":58,"token_start":11,"token_end":11,"label":"PRODUCT"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[184][0m {"text":"Why Don\u2019t Rich People Just Stop Working?","meta":{"source":"The New York Times"},"_input_hash":505038863,"_task_hash":-489208284,"tokens":[{"text":"Why","start":0,"end":3,"id":0},{"text":"Do","start":4,"end":6,"id":1},{"text":"n\u2019t","start":6,"end":9,"id":2},{"text":"Rich","start":10,"end":14,"id":3},{"text":"People","start":15,"end":21,"id":4},{"text":"Just","start":22,"end":26,"id":5},{"text":"Stop","start":27,"end":31,"id":6},{"text":"Working","start":32,"end":39,"id":7},{"text":"?","start":39,"end":40,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[185][0m {"text":"Body of Kidnapped Tech Entrepreneur Found, Police Say","meta":{"source":"The New York Times"},"_input_hash":607099811,"_task_hash":1720198965,"tokens":[{"text":"Body","start":0,"end":4,"id":0},{"text":"of","start":5,"end":7,"id":1},{"text":"Kidnapped","start":8,"end":17,"id":2},{"text":"Tech","start":18,"end":22,"id":3},{"text":"Entrepreneur","start":23,"end":35,"id":4},{"text":"Found","start":36,"end":41,"id":5},{"text":",","start":41,"end":42,"id":6},{"text":"Police","start":43,"end":49,"id":7},{"text":"Say","start":50,"end":53,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[186][0m {"text":"The Church of Techno-Optimism","meta":{"source":"The New York Times"},"_input_hash":1325307869,"_task_hash":1721558627,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Church","start":4,"end":10,"id":1},{"text":"of","start":11,"end":13,"id":2},{"text":"Techno","start":14,"end":20,"id":3},{"text":"-","start":20,"end":21,"id":4},{"text":"Optimism","start":21,"end":29,"id":5}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: True
[35m[47m[187][0m {"text":"5 New Standout Hotels in American College Towns","meta":{"source":"The New York Times"},"_input_hash":-59551518,"_task_hash":-1315837507,"tokens":[{"text":"5","start":0,"end":1,"id":0},{"text":"New","start":2,"end":5,"id":1},{"text":"Standout","start":6,"end":14,"id":2},{"text":"Hotels","start":15,"end":21,"id":3},{"text":"in","start":22,"end":24,"id":4},{"text":"American","start":25,"end":33,"id":5},{"text":"College","start":34,"end":41,"id":6},{"text":"Towns","start":42,"end":47,"id":7}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[188][0m {"text":"Coming to TV This Fall: Everything","meta":{"source":"The New York Times"},"_input_hash":2016083237,"_task_hash":1964720954,"tokens":[{"text":"Coming","start":0,"end":6,"id":0},{"text":"to","start":7,"end":9,"id":1},{"text":"TV","start":10,"end":12,"id":2},{"text":"This","start":13,"end":17,"id":3},{"text":"Fall","start":18,"end":22,"id":4},{"text":":","start":22,"end":23,"id":5},{"text":"Everything","start":24,"end":34,"id":6}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[189][0m {"text":"Why Uber Still Can\u2019t Make a Profit","meta":{"source":"The New York Times"},"_input_hash":479560573,"_task_hash":-1357177938,"tokens":[{"text":"Why","start":0,"end":3,"id":0},{"text":"Uber","start":4,"end":8,"id":1},{"text":"Still","start":9,"end":14,"id":2},{"text":"Ca","start":15,"end":17,"id":3},{"text":"n\u2019t","start":17,"end":20,"id":4},{"text":"Make","start":21,"end":25,"id":5},{"text":"a","start":26,"end":27,"id":6},{"text":"Profit","start":28,"end":34,"id":7}],"spans":[{"token_start":1,"token_end":1,"start":4,"end":8,"text":"Uber","label":"ORG","source":"en_newshead_lg/","input_hash":479560573}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[190][0m {"text":"Former Star Google and Uber Engineer Charged With Theft of Trade Secrets","meta":{"source":"The New York Times"},"_input_hash":1662066223,"_task_hash":1289158610,"tokens":[{"text":"Former","start":0,"end":6,"id":0},{"text":"Star","start":7,"end":11,"id":1},{"text":"Google","start":12,"end":18,"id":2},{"text":"and","start":19,"end":22,"id":3},{"text":"Uber","start":23,"end":27,"id":4},{"text":"Engineer","start":28,"end":36,"id":5},{"text":"Charged","start":37,"end":44,"id":6},{"text":"With","start":45,"end":49,"id":7},{"text":"Theft","start":50,"end":55,"id":8},{"text":"of","start":56,"end":58,"id":9},{"text":"Trade","start":59,"end":64,"id":10},{"text":"Secrets","start":65,"end":72,"id":11}],"spans":[{"start":12,"end":18,"token_start":2,"token_end":2,"label":"ORG"},{"start":23,"end":27,"token_start":4,"token_end":4,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[191][0m {"text":"How the Department of Defense Bankrolled Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":-452454427,"_task_hash":1332210774,"tokens":[{"text":"How","start":0,"end":3,"id":0},{"text":"the","start":4,"end":7,"id":1},{"text":"Department","start":8,"end":18,"id":2},{"text":"of","start":19,"end":21,"id":3},{"text":"Defense","start":22,"end":29,"id":4},{"text":"Bankrolled","start":30,"end":40,"id":5},{"text":"Silicon","start":41,"end":48,"id":6},{"text":"Valley","start":49,"end":55,"id":7}],"spans":[{"start":8,"end":29,"token_start":2,"token_end":4,"label":"ORG"},{"start":41,"end":55,"token_start":6,"token_end":7,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[192][0m {"text":"In Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":-1652766042,"_task_hash":-562792304,"tokens":[{"text":"In","start":0,"end":2,"id":0},{"text":"Silicon","start":3,"end":10,"id":1},{"text":"Valley","start":11,"end":17,"id":2}],"spans":[{"token_start":1,"token_end":2,"start":3,"end":17,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1652766042}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[193][0m {"text":"Silicon Valley Is Over, Says Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":-2104053815,"_task_hash":802921060,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"Is","start":15,"end":17,"id":2},{"text":"Over","start":18,"end":22,"id":3},{"text":",","start":22,"end":23,"id":4},{"text":"Says","start":24,"end":28,"id":5},{"text":"Silicon","start":29,"end":36,"id":6},{"text":"Valley","start":37,"end":43,"id":7}],"spans":[{"token_start":0,"token_end":1,"start":0,"end":14,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-2104053815},{"token_start":6,"token_end":7,"start":29,"end":43,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-2104053815}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[194][0m {"text":"The Upside of a Downturn in Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":-623428525,"_task_hash":-2047754437,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Upside","start":4,"end":10,"id":1},{"text":"of","start":11,"end":13,"id":2},{"text":"a","start":14,"end":15,"id":3},{"text":"Downturn","start":16,"end":24,"id":4},{"text":"in","start":25,"end":27,"id":5},{"text":"Silicon","start":28,"end":35,"id":6},{"text":"Valley","start":36,"end":42,"id":7}],"spans":[{"token_start":6,"token_end":7,"start":28,"end":42,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-623428525}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[195][0m {"text":"In Silicon Valley, Plans for a Monument to Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":1131256964,"_task_hash":444311488,"tokens":[{"text":"In","start":0,"end":2,"id":0},{"text":"Silicon","start":3,"end":10,"id":1},{"text":"Valley","start":11,"end":17,"id":2},{"text":",","start":17,"end":18,"id":3},{"text":"Plans","start":19,"end":24,"id":4},{"text":"for","start":25,"end":28,"id":5},{"text":"a","start":29,"end":30,"id":6},{"text":"Monument","start":31,"end":39,"id":7},{"text":"to","start":40,"end":42,"id":8},{"text":"Silicon","start":43,"end":50,"id":9},{"text":"Valley","start":51,"end":57,"id":10}],"spans":[{"token_start":1,"token_end":2,"start":3,"end":17,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":1131256964},{"token_start":9,"token_end":10,"start":43,"end":57,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":1131256964}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[196][0m {"text":"36 Hours in Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":1050809903,"_task_hash":701484474,"tokens":[{"text":"36","start":0,"end":2,"id":0},{"text":"Hours","start":3,"end":8,"id":1},{"text":"in","start":9,"end":11,"id":2},{"text":"Silicon","start":12,"end":19,"id":3},{"text":"Valley","start":20,"end":26,"id":4}],"spans":[{"token_start":3,"token_end":4,"start":12,"end":26,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":1050809903}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[197][0m {"text":"Who Will Teach Silicon Valley to Be Ethical?","meta":{"source":"The New York Times"},"_input_hash":1864939148,"_task_hash":1067803640,"tokens":[{"text":"Who","start":0,"end":3,"id":0},{"text":"Will","start":4,"end":8,"id":1},{"text":"Teach","start":9,"end":14,"id":2},{"text":"Silicon","start":15,"end":22,"id":3},{"text":"Valley","start":23,"end":29,"id":4},{"text":"to","start":30,"end":32,"id":5},{"text":"Be","start":33,"end":35,"id":6},{"text":"Ethical","start":36,"end":43,"id":7},{"text":"?","start":43,"end":44,"id":8}],"spans":[{"token_start":3,"token_end":4,"start":15,"end":29,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":1864939148}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[198][0m {"text":"The Khans' Path in Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":-48429705,"_task_hash":1444380902,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Khans","start":4,"end":9,"id":1},{"text":"'","start":9,"end":10,"id":2},{"text":"Path","start":11,"end":15,"id":3},{"text":"in","start":16,"end":18,"id":4},{"text":"Silicon","start":19,"end":26,"id":5},{"text":"Valley","start":27,"end":33,"id":6}],"spans":[{"start":4,"end":9,"token_start":1,"token_end":1,"label":"PERSON"},{"start":19,"end":33,"token_start":5,"token_end":6,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[199][0m {"text":"Silicon Valley\u2019s Saudi Arabia Problem","meta":{"source":"The New York Times"},"_input_hash":-1647891297,"_task_hash":-980584334,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"\u2019s","start":14,"end":16,"id":2},{"text":"Saudi","start":17,"end":22,"id":3},{"text":"Arabia","start":23,"end":29,"id":4},{"text":"Problem","start":30,"end":37,"id":5}],"spans":[{"token_start":0,"token_end":1,"start":0,"end":14,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1647891297},{"token_start":3,"token_end":4,"start":17,"end":29,"text":"Saudi Arabia","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1647891297}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[200][0m {"text":"Rebooting Philanthropy in Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":618238021,"_task_hash":-103475856,"tokens":[{"text":"Rebooting","start":0,"end":9,"id":0},{"text":"Philanthropy","start":10,"end":22,"id":1},{"text":"in","start":23,"end":25,"id":2},{"text":"Silicon","start":26,"end":33,"id":3},{"text":"Valley","start":34,"end":40,"id":4}],"spans":[{"token_start":3,"token_end":4,"start":26,"end":40,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":618238021}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[201][0m {"text":"In Silicon Valley, Gossip, Anger and Revenge","meta":{"source":"The New York Times"},"_input_hash":741114403,"_task_hash":689318611,"tokens":[{"text":"In","start":0,"end":2,"id":0},{"text":"Silicon","start":3,"end":10,"id":1},{"text":"Valley","start":11,"end":17,"id":2},{"text":",","start":17,"end":18,"id":3},{"text":"Gossip","start":19,"end":25,"id":4},{"text":",","start":25,"end":26,"id":5},{"text":"Anger","start":27,"end":32,"id":6},{"text":"and","start":33,"end":36,"id":7},{"text":"Revenge","start":37,"end":44,"id":8}],"spans":[{"token_start":1,"token_end":2,"start":3,"end":17,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":741114403}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[202][0m {"text":"A Foot in the Door in Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":116935790,"_task_hash":-568257341,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Foot","start":2,"end":6,"id":1},{"text":"in","start":7,"end":9,"id":2},{"text":"the","start":10,"end":13,"id":3},{"text":"Door","start":14,"end":18,"id":4},{"text":"in","start":19,"end":21,"id":5},{"text":"Silicon","start":22,"end":29,"id":6},{"text":"Valley","start":30,"end":36,"id":7}],"spans":[{"token_start":6,"token_end":7,"start":22,"end":36,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":116935790}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[203][0m {"text":"Showcases for Art in Silicon Valley ","meta":{"source":"The New York Times"},"_input_hash":-1849375876,"_task_hash":1227115090,"tokens":[{"text":"Showcases","start":0,"end":9,"id":0},{"text":"for","start":10,"end":13,"id":1},{"text":"Art","start":14,"end":17,"id":2},{"text":"in","start":18,"end":20,"id":3},{"text":"Silicon","start":21,"end":28,"id":4},{"text":"Valley","start":29,"end":35,"id":5}],"spans":[{"token_start":4,"token_end":5,"start":21,"end":35,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1849375876}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[204][0m {"text":"San Francisco, \u2018the Silicon Valley of Recycling\u2019","meta":{"source":"The New York Times"},"_input_hash":630897768,"_task_hash":454189887,"tokens":[{"text":"San","start":0,"end":3,"id":0},{"text":"Francisco","start":4,"end":13,"id":1},{"text":",","start":13,"end":14,"id":2},{"text":"\u2018","start":15,"end":16,"id":3},{"text":"the","start":16,"end":19,"id":4},{"text":"Silicon","start":20,"end":27,"id":5},{"text":"Valley","start":28,"end":34,"id":6},{"text":"of","start":35,"end":37,"id":7},{"text":"Recycling","start":38,"end":47,"id":8},{"text":"\u2019","start":47,"end":48,"id":9}],"spans":[{"token_start":0,"token_end":1,"start":0,"end":13,"text":"San Francisco","label":"LOCATION","source":"en_newshead_lg/","input_hash":630897768},{"token_start":5,"token_end":6,"start":20,"end":34,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":630897768}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[205][0m {"text":"Elon Musk, the Donald of Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":-18440612,"_task_hash":794644837,"tokens":[{"text":"Elon","start":0,"end":4,"id":0},{"text":"Musk","start":5,"end":9,"id":1},{"text":",","start":9,"end":10,"id":2},{"text":"the","start":11,"end":14,"id":3},{"text":"Donald","start":15,"end":21,"id":4},{"text":"of","start":22,"end":24,"id":5},{"text":"Silicon","start":25,"end":32,"id":6},{"text":"Valley","start":33,"end":39,"id":7}],"spans":[{"start":0,"end":9,"token_start":0,"token_end":1,"label":"PERSON"},{"start":15,"end":21,"token_start":4,"token_end":4,"label":"PERSON"},{"start":25,"end":39,"token_start":6,"token_end":7,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[206][0m {"text":"Don\u2019t Blame Silicon Valley for Theranos","meta":{"source":"The New York Times"},"_input_hash":37450845,"_task_hash":-991756984,"tokens":[{"text":"Do","start":0,"end":2,"id":0},{"text":"n\u2019t","start":2,"end":5,"id":1},{"text":"Blame","start":6,"end":11,"id":2},{"text":"Silicon","start":12,"end":19,"id":3},{"text":"Valley","start":20,"end":26,"id":4},{"text":"for","start":27,"end":30,"id":5},{"text":"Theranos","start":31,"end":39,"id":6}],"spans":[{"start":12,"end":26,"token_start":3,"token_end":4,"label":"LOCATION"},{"start":31,"end":39,"token_start":6,"token_end":6,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[207][0m {"text":"The Expensive Education of Mark Zuckerberg and Silicon Valley","meta":{"source":"The New York Times"},"_input_hash":-1348320529,"_task_hash":1613856910,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Expensive","start":4,"end":13,"id":1},{"text":"Education","start":14,"end":23,"id":2},{"text":"of","start":24,"end":26,"id":3},{"text":"Mark","start":27,"end":31,"id":4},{"text":"Zuckerberg","start":32,"end":42,"id":5},{"text":"and","start":43,"end":46,"id":6},{"text":"Silicon","start":47,"end":54,"id":7},{"text":"Valley","start":55,"end":61,"id":8}],"spans":[{"start":27,"end":42,"token_start":4,"token_end":5,"label":"PERSON"},{"start":47,"end":61,"token_start":7,"token_end":8,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[208][0m {"text":"To Fit Into Silicon Valley, Wear These Wool Shoes","meta":{"source":"The New York Times"},"_input_hash":1244220420,"_task_hash":-996806294,"tokens":[{"text":"To","start":0,"end":2,"id":0},{"text":"Fit","start":3,"end":6,"id":1},{"text":"Into","start":7,"end":11,"id":2},{"text":"Silicon","start":12,"end":19,"id":3},{"text":"Valley","start":20,"end":26,"id":4},{"text":",","start":26,"end":27,"id":5},{"text":"Wear","start":28,"end":32,"id":6},{"text":"These","start":33,"end":38,"id":7},{"text":"Wool","start":39,"end":43,"id":8},{"text":"Shoes","start":44,"end":49,"id":9}],"spans":[{"token_start":3,"token_end":4,"start":12,"end":26,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":1244220420}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[209][0m {"text":"The Slow-Burning Success of Disney\u2019s Bob Iger","meta":{"source":"The New York Times"},"_input_hash":-1053365208,"_task_hash":-1245125965,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Slow","start":4,"end":8,"id":1},{"text":"-","start":8,"end":9,"id":2},{"text":"Burning","start":9,"end":16,"id":3},{"text":"Success","start":17,"end":24,"id":4},{"text":"of","start":25,"end":27,"id":5},{"text":"Disney","start":28,"end":34,"id":6},{"text":"\u2019s","start":34,"end":36,"id":7},{"text":"Bob","start":37,"end":40,"id":8},{"text":"Iger","start":41,"end":45,"id":9}],"spans":[{"start":28,"end":34,"token_start":6,"token_end":6,"label":"ORG"},{"start":37,"end":45,"token_start":8,"token_end":9,"label":"PERSON"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[210][0m {"text":"No, No, CEO","meta":{"source":"The New York Times"},"_input_hash":-1608382480,"_task_hash":1153336815,"tokens":[{"text":"No","start":0,"end":2,"id":0},{"text":",","start":2,"end":3,"id":1},{"text":"No","start":4,"end":6,"id":2},{"text":",","start":6,"end":7,"id":3},{"text":"CEO","start":8,"end":11,"id":4}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[211][0m {"text":"Mattel CEO resigns, interim CEO named","meta":{"source":"The New York Times"},"_input_hash":1718338853,"_task_hash":-431975744,"tokens":[{"text":"Mattel","start":0,"end":6,"id":0},{"text":"CEO","start":7,"end":10,"id":1},{"text":"resigns","start":11,"end":18,"id":2},{"text":",","start":18,"end":19,"id":3},{"text":"interim","start":20,"end":27,"id":4},{"text":"CEO","start":28,"end":31,"id":5},{"text":"named","start":32,"end":37,"id":6}],"spans":[{"start":0,"end":6,"token_start":0,"token_end":0,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[212][0m {"text":"To be or not to be, the CEO?","meta":{"source":"The New York Times"},"_input_hash":1244336029,"_task_hash":1831351178,"tokens":[{"text":"To","start":0,"end":2,"id":0},{"text":"be","start":3,"end":5,"id":1},{"text":"or","start":6,"end":8,"id":2},{"text":"not","start":9,"end":12,"id":3},{"text":"to","start":13,"end":15,"id":4},{"text":"be","start":16,"end":18,"id":5},{"text":",","start":18,"end":19,"id":6},{"text":"the","start":20,"end":23,"id":7},{"text":"CEO","start":24,"end":27,"id":8},{"text":"?","start":27,"end":28,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[213][0m {"text":"Twitter CEO Costolo out","meta":{"source":"The New York Times"},"_input_hash":1735513522,"_task_hash":1886722991,"tokens":[{"text":"Twitter","start":0,"end":7,"id":0},{"text":"CEO","start":8,"end":11,"id":1},{"text":"Costolo","start":12,"end":19,"id":2},{"text":"out","start":20,"end":23,"id":3}],"spans":[{"start":0,"end":7,"token_start":0,"token_end":0,"label":"ORG"},{"start":12,"end":19,"token_start":2,"token_end":2,"label":"PERSON"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[214][0m {"text":"Livedoor CEO arrested","meta":{"source":"The New York Times"},"_input_hash":1072271031,"_task_hash":-1398513954,"tokens":[{"text":"Livedoor","start":0,"end":8,"id":0},{"text":"CEO","start":9,"end":12,"id":1},{"text":"arrested","start":13,"end":21,"id":2}],"spans":[{"start":0,"end":8,"token_start":0,"token_end":0,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[215][0m {"text":"Companies punt on CEO perks","meta":{"source":"The New York Times"},"_input_hash":-1464344725,"_task_hash":698195053,"tokens":[{"text":"Companies","start":0,"end":9,"id":0},{"text":"punt","start":10,"end":14,"id":1},{"text":"on","start":15,"end":17,"id":2},{"text":"CEO","start":18,"end":21,"id":3},{"text":"perks","start":22,"end":27,"id":4}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[216][0m {"text":"How optimistic are CEOs in Davos?","meta":{"source":"The New York Times"},"_input_hash":509054179,"_task_hash":1481606072,"tokens":[{"text":"How","start":0,"end":3,"id":0},{"text":"optimistic","start":4,"end":14,"id":1},{"text":"are","start":15,"end":18,"id":2},{"text":"CEOs","start":19,"end":23,"id":3},{"text":"in","start":24,"end":26,"id":4},{"text":"Davos","start":27,"end":32,"id":5},{"text":"?","start":32,"end":33,"id":6}],"spans":[{"token_start":5,"token_end":5,"start":27,"end":32,"text":"Davos","label":"LOCATION","source":"en_newshead_lg/","input_hash":509054179}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[217][0m {"text":"American Apparel ousts CEO","meta":{"source":"The New York Times"},"_input_hash":-571030101,"_task_hash":1841192291,"tokens":[{"text":"American","start":0,"end":8,"id":0},{"text":"Apparel","start":9,"end":16,"id":1},{"text":"ousts","start":17,"end":22,"id":2},{"text":"CEO","start":23,"end":26,"id":3}],"spans":[{"start":0,"end":16,"token_start":0,"token_end":1,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: True
[35m[47m[218][0m {"text":"Twitter CEO visits China","meta":{"source":"The New York Times"},"_input_hash":620727002,"_task_hash":49397895,"tokens":[{"text":"Twitter","start":0,"end":7,"id":0},{"text":"CEO","start":8,"end":11,"id":1},{"text":"visits","start":12,"end":18,"id":2},{"text":"China","start":19,"end":24,"id":3}],"spans":[{"start":0,"end":7,"token_start":0,"token_end":0,"label":"ORG"},{"start":19,"end":24,"token_start":3,"token_end":3,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[219][0m {"text":"Exxon CEO on Global Strategy","meta":{"source":"The New York Times"},"_input_hash":158961309,"_task_hash":-1978253912,"tokens":[{"text":"Exxon","start":0,"end":5,"id":0},{"text":"CEO","start":6,"end":9,"id":1},{"text":"on","start":10,"end":12,"id":2},{"text":"Global","start":13,"end":19,"id":3},{"text":"Strategy","start":20,"end":28,"id":4}],"spans":[{"start":0,"end":5,"token_start":0,"token_end":0,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[220][0m {"text":"Palm CEO Talks Tech","meta":{"source":"The New York Times"},"_input_hash":1521790293,"_task_hash":-905745568,"tokens":[{"text":"Palm","start":0,"end":4,"id":0},{"text":"CEO","start":5,"end":8,"id":1},{"text":"Talks","start":9,"end":14,"id":2},{"text":"Tech","start":15,"end":19,"id":3}],"spans":[{"start":0,"end":4,"token_start":0,"token_end":0,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[221][0m {"text":"Ergen returns as CEO of Dish","meta":{"source":"The New York Times"},"_input_hash":-1872731148,"_task_hash":102145299,"tokens":[{"text":"Ergen","start":0,"end":5,"id":0},{"text":"returns","start":6,"end":13,"id":1},{"text":"as","start":14,"end":16,"id":2},{"text":"CEO","start":17,"end":20,"id":3},{"text":"of","start":21,"end":23,"id":4},{"text":"Dish","start":24,"end":28,"id":5}],"spans":[{"start":0,"end":5,"token_start":0,"token_end":0,"label":"PERSON"},{"start":24,"end":28,"token_start":5,"token_end":5,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[222][0m {"text":"Qwest CEO to resign","meta":{"source":"The New York Times"},"_input_hash":65753102,"_task_hash":-797102915,"tokens":[{"text":"Qwest","start":0,"end":5,"id":0},{"text":"CEO","start":6,"end":9,"id":1},{"text":"to","start":10,"end":12,"id":2},{"text":"resign","start":13,"end":19,"id":3}],"spans":[{"start":0,"end":5,"token_start":0,"token_end":0,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[223][0m {"text":"Carrefour fires CEO","meta":{"source":"The New York Times"},"_input_hash":-801737223,"_task_hash":-1099110300,"tokens":[{"text":"Carrefour","start":0,"end":9,"id":0},{"text":"fires","start":10,"end":15,"id":1},{"text":"CEO","start":16,"end":19,"id":2}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":9,"text":"Carrefour","label":"ORG","source":"en_newshead_lg/","input_hash":-801737223}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[224][0m {"text":"Volkwagen CEO refuses to resign","meta":{"source":"The New York Times"},"_input_hash":-1148802997,"_task_hash":2061953027,"tokens":[{"text":"Volkwagen","start":0,"end":9,"id":0},{"text":"CEO","start":10,"end":13,"id":1},{"text":"refuses","start":14,"end":21,"id":2},{"text":"to","start":22,"end":24,"id":3},{"text":"resign","start":25,"end":31,"id":4}],"spans":[{"start":0,"end":9,"token_start":0,"token_end":0,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[225][0m {"text":"Starwood Hotels CEO resigns","meta":{"source":"The New York Times"},"_input_hash":1431025370,"_task_hash":-1698950462,"tokens":[{"text":"Starwood","start":0,"end":8,"id":0},{"text":"Hotels","start":9,"end":15,"id":1},{"text":"CEO","start":16,"end":19,"id":2},{"text":"resigns","start":20,"end":27,"id":3}],"spans":[{"start":0,"end":15,"token_start":0,"token_end":1,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[226][0m {"text":"Putting a value on a CEO","meta":{"source":"The New York Times"},"_input_hash":-1808640030,"_task_hash":108181546,"tokens":[{"text":"Putting","start":0,"end":7,"id":0},{"text":"a","start":8,"end":9,"id":1},{"text":"value","start":10,"end":15,"id":2},{"text":"on","start":16,"end":18,"id":3},{"text":"a","start":19,"end":20,"id":4},{"text":"CEO","start":21,"end":24,"id":5}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[227][0m {"text":"Most-admired CEO is not an oxymoron","meta":{"source":"The New York Times"},"_input_hash":949844465,"_task_hash":1891921092,"tokens":[{"text":"Most","start":0,"end":4,"id":0},{"text":"-","start":4,"end":5,"id":1},{"text":"admired","start":5,"end":12,"id":2},{"text":"CEO","start":13,"end":16,"id":3},{"text":"is","start":17,"end":19,"id":4},{"text":"not","start":20,"end":23,"id":5},{"text":"an","start":24,"end":26,"id":6},{"text":"oxymoron","start":27,"end":35,"id":7}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[228][0m {"text":"CEOs and CIOs Are Increasingly Disconnected","meta":{"source":"The New York Times"},"_input_hash":-87106184,"_task_hash":513324067,"tokens":[{"text":"CEOs","start":0,"end":4,"id":0},{"text":"and","start":5,"end":8,"id":1},{"text":"CIOs","start":9,"end":13,"id":2},{"text":"Are","start":14,"end":17,"id":3},{"text":"Increasingly","start":18,"end":30,"id":4},{"text":"Disconnected","start":31,"end":43,"id":5}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[229][0m {"text":"Goldman CEO Blankfein reveals lymphoma","meta":{"source":"The New York Times"},"_input_hash":1351729590,"_task_hash":-703549770,"tokens":[{"text":"Goldman","start":0,"end":7,"id":0},{"text":"CEO","start":8,"end":11,"id":1},{"text":"Blankfein","start":12,"end":21,"id":2},{"text":"reveals","start":22,"end":29,"id":3},{"text":"lymphoma","start":30,"end":38,"id":4}],"spans":[{"start":0,"end":7,"token_start":0,"token_end":0,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[230][0m {"text":"Lumber Liquidators CEO jumps ship","meta":{"source":"The New York Times"},"_input_hash":-1075411676,"_task_hash":605123169,"tokens":[{"text":"Lumber","start":0,"end":6,"id":0},{"text":"Liquidators","start":7,"end":18,"id":1},{"text":"CEO","start":19,"end":22,"id":2},{"text":"jumps","start":23,"end":28,"id":3},{"text":"ship","start":29,"end":33,"id":4}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[231][0m {"text":"Sony CEO pressured by investors, and a legacy","meta":{"source":"The New York Times"},"_input_hash":-490082585,"_task_hash":1542696714,"tokens":[{"text":"Sony","start":0,"end":4,"id":0},{"text":"CEO","start":5,"end":8,"id":1},{"text":"pressured","start":9,"end":18,"id":2},{"text":"by","start":19,"end":21,"id":3},{"text":"investors","start":22,"end":31,"id":4},{"text":",","start":31,"end":32,"id":5},{"text":"and","start":33,"end":36,"id":6},{"text":"a","start":37,"end":38,"id":7},{"text":"legacy","start":39,"end":45,"id":8}],"spans":[{"start":0,"end":4,"token_start":0,"token_end":0,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[232][0m {"text":"New CEO Mueller to VW's rescue?","meta":{"source":"The New York Times"},"_input_hash":1794145532,"_task_hash":-42600717,"tokens":[{"text":"New","start":0,"end":3,"id":0},{"text":"CEO","start":4,"end":7,"id":1},{"text":"Mueller","start":8,"end":15,"id":2},{"text":"to","start":16,"end":18,"id":3},{"text":"VW","start":19,"end":21,"id":4},{"text":"'s","start":21,"end":23,"id":5},{"text":"rescue","start":24,"end":30,"id":6},{"text":"?","start":30,"end":31,"id":7}],"spans":[{"start":8,"end":15,"token_start":2,"token_end":2,"label":"PERSON"},{"start":19,"end":21,"token_start":4,"token_end":4,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[233][0m {"text":"Tesco CEO defies pressure to quit","meta":{"source":"The New York Times"},"_input_hash":2052091027,"_task_hash":2087478433,"tokens":[{"text":"Tesco","start":0,"end":5,"id":0},{"text":"CEO","start":6,"end":9,"id":1},{"text":"defies","start":10,"end":16,"id":2},{"text":"pressure","start":17,"end":25,"id":3},{"text":"to","start":26,"end":28,"id":4},{"text":"quit","start":29,"end":33,"id":5}],"spans":[{"start":0,"end":5,"token_start":0,"token_end":0,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[234][0m {"text":"Boeing May Suspend 737 Max Production","meta":{"source":"The New York Times"},"_input_hash":1017017587,"_task_hash":233218836,"tokens":[{"text":"Boeing","start":0,"end":6,"id":0},{"text":"May","start":7,"end":10,"id":1},{"text":"Suspend","start":11,"end":18,"id":2},{"text":"737","start":19,"end":22,"id":3},{"text":"Max","start":23,"end":26,"id":4},{"text":"Production","start":27,"end":37,"id":5}],"spans":[{"start":0,"end":6,"token_start":0,"token_end":0,"label":"ORG"},{"start":19,"end":26,"token_start":3,"token_end":4,"label":"PRODUCT"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[235][0m {"text":"Uber in Talks to Sell Its Food-Delivery Business in India","meta":{"source":"The New York Times"},"_input_hash":-550034088,"_task_hash":1914337773,"tokens":[{"text":"Uber","start":0,"end":4,"id":0},{"text":"in","start":5,"end":7,"id":1},{"text":"Talks","start":8,"end":13,"id":2},{"text":"to","start":14,"end":16,"id":3},{"text":"Sell","start":17,"end":21,"id":4},{"text":"Its","start":22,"end":25,"id":5},{"text":"Food","start":26,"end":30,"id":6},{"text":"-","start":30,"end":31,"id":7},{"text":"Delivery","start":31,"end":39,"id":8},{"text":"Business","start":40,"end":48,"id":9},{"text":"in","start":49,"end":51,"id":10},{"text":"India","start":52,"end":57,"id":11}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":4,"text":"Uber","label":"ORG","source":"en_newshead_lg/","input_hash":-550034088},{"token_start":11,"token_end":11,"start":52,"end":57,"text":"India","label":"LOCATION","source":"en_newshead_lg/","input_hash":-550034088}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[236][0m {"text":"Prime Leverage: How Amazon Wields Power in the Technology World","meta":{"source":"The New York Times"},"_input_hash":2040117683,"_task_hash":1618282341,"tokens":[{"text":"Prime","start":0,"end":5,"id":0},{"text":"Leverage","start":6,"end":14,"id":1},{"text":":","start":14,"end":15,"id":2},{"text":"How","start":16,"end":19,"id":3},{"text":"Amazon","start":20,"end":26,"id":4},{"text":"Wields","start":27,"end":33,"id":5},{"text":"Power","start":34,"end":39,"id":6},{"text":"in","start":40,"end":42,"id":7},{"text":"the","start":43,"end":46,"id":8},{"text":"Technology","start":47,"end":57,"id":9},{"text":"World","start":58,"end":63,"id":10}],"spans":[{"token_start":4,"token_end":4,"start":20,"end":26,"text":"Amazon","label":"ORG","source":"en_newshead_lg/","input_hash":2040117683}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[237][0m {"text":"How Talent, Location and Global Links Drive Hong Kong\u2019s Legal Tech Scene","meta":{"source":"The New York Times"},"_input_hash":1848827497,"_task_hash":244139284,"tokens":[{"text":"How","start":0,"end":3,"id":0},{"text":"Talent","start":4,"end":10,"id":1},{"text":",","start":10,"end":11,"id":2},{"text":"Location","start":12,"end":20,"id":3},{"text":"and","start":21,"end":24,"id":4},{"text":"Global","start":25,"end":31,"id":5},{"text":"Links","start":32,"end":37,"id":6},{"text":"Drive","start":38,"end":43,"id":7},{"text":"Hong","start":44,"end":48,"id":8},{"text":"Kong","start":49,"end":53,"id":9},{"text":"\u2019s","start":53,"end":55,"id":10},{"text":"Legal","start":56,"end":61,"id":11},{"text":"Tech","start":62,"end":66,"id":12},{"text":"Scene","start":67,"end":72,"id":13}],"spans":[{"token_start":8,"token_end":9,"start":44,"end":53,"text":"Hong Kong","label":"LOCATION","source":"en_newshead_lg/","input_hash":1848827497}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[238][0m {"text":"SoftBank Takes Loss in Sale of Wag, Dog-Walking Start-Up","meta":{"source":"The New York Times"},"_input_hash":1048810576,"_task_hash":1898598748,"tokens":[{"text":"SoftBank","start":0,"end":8,"id":0},{"text":"Takes","start":9,"end":14,"id":1},{"text":"Loss","start":15,"end":19,"id":2},{"text":"in","start":20,"end":22,"id":3},{"text":"Sale","start":23,"end":27,"id":4},{"text":"of","start":28,"end":30,"id":5},{"text":"Wag","start":31,"end":34,"id":6},{"text":",","start":34,"end":35,"id":7},{"text":"Dog","start":36,"end":39,"id":8},{"text":"-","start":39,"end":40,"id":9},{"text":"Walking","start":40,"end":47,"id":10},{"text":"Start","start":48,"end":53,"id":11},{"text":"-","start":53,"end":54,"id":12},{"text":"Up","start":54,"end":56,"id":13}],"spans":[{"start":0,"end":8,"token_start":0,"token_end":0,"label":"ORG"},{"start":31,"end":34,"token_start":6,"token_end":6,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[239][0m {"text":"Underwater Drones, Mars Rover Parts and a High-Tech Revival","meta":{"source":"The New York Times"},"_input_hash":555216562,"_task_hash":2129355145,"tokens":[{"text":"Underwater","start":0,"end":10,"id":0},{"text":"Drones","start":11,"end":17,"id":1},{"text":",","start":17,"end":18,"id":2},{"text":"Mars","start":19,"end":23,"id":3},{"text":"Rover","start":24,"end":29,"id":4},{"text":"Parts","start":30,"end":35,"id":5},{"text":"and","start":36,"end":39,"id":6},{"text":"a","start":40,"end":41,"id":7},{"text":"High","start":42,"end":46,"id":8},{"text":"-","start":46,"end":47,"id":9},{"text":"Tech","start":47,"end":51,"id":10},{"text":"Revival","start":52,"end":59,"id":11}],"spans":[{"start":19,"end":29,"token_start":3,"token_end":4,"label":"PRODUCT"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[240][0m {"text":"What Makes a \u2018Narrative Violation\u2019?","meta":{"source":"The New York Times"},"_input_hash":-321483193,"_task_hash":1229660135,"tokens":[{"text":"What","start":0,"end":4,"id":0},{"text":"Makes","start":5,"end":10,"id":1},{"text":"a","start":11,"end":12,"id":2},{"text":"\u2018","start":13,"end":14,"id":3},{"text":"Narrative","start":14,"end":23,"id":4},{"text":"Violation","start":24,"end":33,"id":5},{"text":"\u2019","start":33,"end":34,"id":6},{"text":"?","start":34,"end":35,"id":7}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[241][0m {"text":"Fresh-Food Vending Machines Will Be Graded Like Restaurants","meta":{"source":"The New York Times"},"_input_hash":380485060,"_task_hash":-1351992243,"tokens":[{"text":"Fresh","start":0,"end":5,"id":0},{"text":"-","start":5,"end":6,"id":1},{"text":"Food","start":6,"end":10,"id":2},{"text":"Vending","start":11,"end":18,"id":3},{"text":"Machines","start":19,"end":27,"id":4},{"text":"Will","start":28,"end":32,"id":5},{"text":"Be","start":33,"end":35,"id":6},{"text":"Graded","start":36,"end":42,"id":7},{"text":"Like","start":43,"end":47,"id":8},{"text":"Restaurants","start":48,"end":59,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[242][0m {"text":"With Big Tech in Their Path, Start-Ups Turn to Business Markets","meta":{"source":"The New York Times"},"_input_hash":1456765810,"_task_hash":-245060751,"tokens":[{"text":"With","start":0,"end":4,"id":0},{"text":"Big","start":5,"end":8,"id":1},{"text":"Tech","start":9,"end":13,"id":2},{"text":"in","start":14,"end":16,"id":3},{"text":"Their","start":17,"end":22,"id":4},{"text":"Path","start":23,"end":27,"id":5},{"text":",","start":27,"end":28,"id":6},{"text":"Start","start":29,"end":34,"id":7},{"text":"-","start":34,"end":35,"id":8},{"text":"Ups","start":35,"end":38,"id":9},{"text":"Turn","start":39,"end":43,"id":10},{"text":"to","start":44,"end":46,"id":11},{"text":"Business","start":47,"end":55,"id":12},{"text":"Markets","start":56,"end":63,"id":13}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[243][0m {"text":"How Can Female Entrepreneurs Attract Financing?","meta":{"source":"The New York Times"},"_input_hash":299157213,"_task_hash":1077838459,"tokens":[{"text":"How","start":0,"end":3,"id":0},{"text":"Can","start":4,"end":7,"id":1},{"text":"Female","start":8,"end":14,"id":2},{"text":"Entrepreneurs","start":15,"end":28,"id":3},{"text":"Attract","start":29,"end":36,"id":4},{"text":"Financing","start":37,"end":46,"id":5},{"text":"?","start":46,"end":47,"id":6}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[244][0m {"text":"How a Gig Worker Revolt Begins","meta":{"source":"The New York Times"},"_input_hash":-1297896117,"_task_hash":61934302,"tokens":[{"text":"How","start":0,"end":3,"id":0},{"text":"a","start":4,"end":5,"id":1},{"text":"Gig","start":6,"end":9,"id":2},{"text":"Worker","start":10,"end":16,"id":3},{"text":"Revolt","start":17,"end":23,"id":4},{"text":"Begins","start":24,"end":30,"id":5}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[245][0m {"text":"For Start-Ups, Cash Is King (Again)","meta":{"source":"The New York Times"},"_input_hash":1276948057,"_task_hash":-1043957047,"tokens":[{"text":"For","start":0,"end":3,"id":0},{"text":"Start","start":4,"end":9,"id":1},{"text":"-","start":9,"end":10,"id":2},{"text":"Ups","start":10,"end":13,"id":3},{"text":",","start":13,"end":14,"id":4},{"text":"Cash","start":15,"end":19,"id":5},{"text":"Is","start":20,"end":22,"id":6},{"text":"King","start":23,"end":27,"id":7},{"text":"(","start":28,"end":29,"id":8},{"text":"Again","start":29,"end":34,"id":9},{"text":")","start":34,"end":35,"id":10}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[246][0m {"text":"The SoftBank Effect: How $100 Billion Left Workers in a Hole","meta":{"source":"The New York Times"},"_input_hash":2130982726,"_task_hash":174944548,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"SoftBank","start":4,"end":12,"id":1},{"text":"Effect","start":13,"end":19,"id":2},{"text":":","start":19,"end":20,"id":3},{"text":"How","start":21,"end":24,"id":4},{"text":"$","start":25,"end":26,"id":5},{"text":"100","start":26,"end":29,"id":6},{"text":"Billion","start":30,"end":37,"id":7},{"text":"Left","start":38,"end":42,"id":8},{"text":"Workers","start":43,"end":50,"id":9},{"text":"in","start":51,"end":53,"id":10},{"text":"a","start":54,"end":55,"id":11},{"text":"Hole","start":56,"end":60,"id":12}],"spans":[{"start":4,"end":12,"token_start":1,"token_end":1,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[247][0m {"text":"WeWork Falls Furthest in a Year of Clipped Wings for Hot Startups","meta":{"source":"The New York Times"},"_input_hash":296601283,"_task_hash":-868347180,"tokens":[{"text":"WeWork","start":0,"end":6,"id":0},{"text":"Falls","start":7,"end":12,"id":1},{"text":"Furthest","start":13,"end":21,"id":2},{"text":"in","start":22,"end":24,"id":3},{"text":"a","start":25,"end":26,"id":4},{"text":"Year","start":27,"end":31,"id":5},{"text":"of","start":32,"end":34,"id":6},{"text":"Clipped","start":35,"end":42,"id":7},{"text":"Wings","start":43,"end":48,"id":8},{"text":"for","start":49,"end":52,"id":9},{"text":"Hot","start":53,"end":56,"id":10},{"text":"Startups","start":57,"end":65,"id":11}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":6,"text":"WeWork","label":"ORG","source":"en_newshead_lg/","input_hash":296601283}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[248][0m {"text":"Burrito Delivered by Bot, as Long as Students Don\u2019t Trap It","meta":{"source":"The New York Times"},"_input_hash":-870900491,"_task_hash":-134803922,"tokens":[{"text":"Burrito","start":0,"end":7,"id":0},{"text":"Delivered","start":8,"end":17,"id":1},{"text":"by","start":18,"end":20,"id":2},{"text":"Bot","start":21,"end":24,"id":3},{"text":",","start":24,"end":25,"id":4},{"text":"as","start":26,"end":28,"id":5},{"text":"Long","start":29,"end":33,"id":6},{"text":"as","start":34,"end":36,"id":7},{"text":"Students","start":37,"end":45,"id":8},{"text":"Do","start":46,"end":48,"id":9},{"text":"n\u2019t","start":48,"end":51,"id":10},{"text":"Trap","start":52,"end":56,"id":11},{"text":"It","start":57,"end":59,"id":12}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: True
[35m[47m[249][0m {"text":"How to Feel Nothing Now, in Order to Feel More Later","meta":{"source":"The New York Times"},"_input_hash":-82195143,"_task_hash":1933206408,"tokens":[{"text":"How","start":0,"end":3,"id":0},{"text":"to","start":4,"end":6,"id":1},{"text":"Feel","start":7,"end":11,"id":2},{"text":"Nothing","start":12,"end":19,"id":3},{"text":"Now","start":20,"end":23,"id":4},{"text":",","start":23,"end":24,"id":5},{"text":"in","start":25,"end":27,"id":6},{"text":"Order","start":28,"end":33,"id":7},{"text":"to","start":34,"end":36,"id":8},{"text":"Feel","start":37,"end":41,"id":9},{"text":"More","start":42,"end":46,"id":10},{"text":"Later","start":47,"end":52,"id":11}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[250][0m {"text":"The Work Diary of an Audio Erotica C.E.O.","meta":{"source":"The New York Times"},"_input_hash":1262437001,"_task_hash":503262025,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Work","start":4,"end":8,"id":1},{"text":"Diary","start":9,"end":14,"id":2},{"text":"of","start":15,"end":17,"id":3},{"text":"an","start":18,"end":20,"id":4},{"text":"Audio","start":21,"end":26,"id":5},{"text":"Erotica","start":27,"end":34,"id":6},{"text":"C.E.O.","start":35,"end":41,"id":7}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[251][0m {"text":"Lyft Focuses on Profitability as Cash-Burning Companies Lose Luster","meta":{"source":"The New York Times"},"_input_hash":804540025,"_task_hash":-634136482,"tokens":[{"text":"Lyft","start":0,"end":4,"id":0},{"text":"Focuses","start":5,"end":12,"id":1},{"text":"on","start":13,"end":15,"id":2},{"text":"Profitability","start":16,"end":29,"id":3},{"text":"as","start":30,"end":32,"id":4},{"text":"Cash","start":33,"end":37,"id":5},{"text":"-","start":37,"end":38,"id":6},{"text":"Burning","start":38,"end":45,"id":7},{"text":"Companies","start":46,"end":55,"id":8},{"text":"Lose","start":56,"end":60,"id":9},{"text":"Luster","start":61,"end":67,"id":10}],"spans":[{"start":0,"end":4,"token_start":0,"token_end":0,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[252][0m {"text":"A Start-Up Strategy: Made in Mainland China, Designed in Hong Kong","meta":{"source":"The New York Times"},"_input_hash":-1040888191,"_task_hash":785880250,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Start","start":2,"end":7,"id":1},{"text":"-","start":7,"end":8,"id":2},{"text":"Up","start":8,"end":10,"id":3},{"text":"Strategy","start":11,"end":19,"id":4},{"text":":","start":19,"end":20,"id":5},{"text":"Made","start":21,"end":25,"id":6},{"text":"in","start":26,"end":28,"id":7},{"text":"Mainland","start":29,"end":37,"id":8},{"text":"China","start":38,"end":43,"id":9},{"text":",","start":43,"end":44,"id":10},{"text":"Designed","start":45,"end":53,"id":11},{"text":"in","start":54,"end":56,"id":12},{"text":"Hong","start":57,"end":61,"id":13},{"text":"Kong","start":62,"end":66,"id":14}],"spans":[{"token_start":8,"token_end":9,"start":29,"end":43,"text":"Mainland China","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1040888191},{"token_start":13,"token_end":14,"start":57,"end":66,"text":"Hong Kong","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1040888191}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[253][0m {"text":"Don Valentine, Founder of Sequoia Capital, Is Dead at 87","meta":{"source":"The New York Times"},"_input_hash":349137777,"_task_hash":-1877607661,"tokens":[{"text":"Don","start":0,"end":3,"id":0},{"text":"Valentine","start":4,"end":13,"id":1},{"text":",","start":13,"end":14,"id":2},{"text":"Founder","start":15,"end":22,"id":3},{"text":"of","start":23,"end":25,"id":4},{"text":"Sequoia","start":26,"end":33,"id":5},{"text":"Capital","start":34,"end":41,"id":6},{"text":",","start":41,"end":42,"id":7},{"text":"Is","start":43,"end":45,"id":8},{"text":"Dead","start":46,"end":50,"id":9},{"text":"at","start":51,"end":53,"id":10},{"text":"87","start":54,"end":56,"id":11}],"spans":[{"start":0,"end":13,"token_start":0,"token_end":1,"label":"PERSON"},{"start":26,"end":41,"token_start":5,"token_end":6,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[254][0m {"text":"Using Technology to Close the Autism Job Gap","meta":{"source":"The New York Times"},"_input_hash":451353869,"_task_hash":1696411960,"tokens":[{"text":"Using","start":0,"end":5,"id":0},{"text":"Technology","start":6,"end":16,"id":1},{"text":"to","start":17,"end":19,"id":2},{"text":"Close","start":20,"end":25,"id":3},{"text":"the","start":26,"end":29,"id":4},{"text":"Autism","start":30,"end":36,"id":5},{"text":"Job","start":37,"end":40,"id":6},{"text":"Gap","start":41,"end":44,"id":7}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[255][0m {"text":"Would You Like Fries With That? McDonald\u2019s Already Knows the Answer","meta":{"source":"The New York Times"},"_input_hash":233033512,"_task_hash":114203745,"tokens":[{"text":"Would","start":0,"end":5,"id":0},{"text":"You","start":6,"end":9,"id":1},{"text":"Like","start":10,"end":14,"id":2},{"text":"Fries","start":15,"end":20,"id":3},{"text":"With","start":21,"end":25,"id":4},{"text":"That","start":26,"end":30,"id":5},{"text":"?","start":30,"end":31,"id":6},{"text":"McDonald","start":32,"end":40,"id":7},{"text":"\u2019s","start":40,"end":42,"id":8},{"text":"Already","start":43,"end":50,"id":9},{"text":"Knows","start":51,"end":56,"id":10},{"text":"the","start":57,"end":60,"id":11},{"text":"Answer","start":61,"end":67,"id":12}],"spans":[{"token_start":7,"token_end":7,"start":32,"end":40,"text":"McDonald","label":"ORG","source":"en_newshead_lg/","input_hash":233033512}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[256][0m {"text":"A Photographer\u2019s Arduous Climb to the Roof of the Jungle","meta":{"source":"The New York Times"},"_input_hash":-462599966,"_task_hash":607299819,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Photographer","start":2,"end":14,"id":1},{"text":"\u2019s","start":14,"end":16,"id":2},{"text":"Arduous","start":17,"end":24,"id":3},{"text":"Climb","start":25,"end":30,"id":4},{"text":"to","start":31,"end":33,"id":5},{"text":"the","start":34,"end":37,"id":6},{"text":"Roof","start":38,"end":42,"id":7},{"text":"of","start":43,"end":45,"id":8},{"text":"the","start":46,"end":49,"id":9},{"text":"Jungle","start":50,"end":56,"id":10}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[257][0m {"text":"Business Is Thrilling Again. Enjoy the Spectacle, From a Distance.","meta":{"source":"The New York Times"},"_input_hash":-1667528411,"_task_hash":2021235475,"tokens":[{"text":"Business","start":0,"end":8,"id":0},{"text":"Is","start":9,"end":11,"id":1},{"text":"Thrilling","start":12,"end":21,"id":2},{"text":"Again","start":22,"end":27,"id":3},{"text":".","start":27,"end":28,"id":4},{"text":"Enjoy","start":29,"end":34,"id":5},{"text":"the","start":35,"end":38,"id":6},{"text":"Spectacle","start":39,"end":48,"id":7},{"text":",","start":48,"end":49,"id":8},{"text":"From","start":50,"end":54,"id":9},{"text":"a","start":55,"end":56,"id":10},{"text":"Distance","start":57,"end":65,"id":11},{"text":".","start":65,"end":66,"id":12}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[258][0m {"text":"The Week in Tech: Navigating the Chinese Minefield","meta":{"source":"The New York Times"},"_input_hash":-993870076,"_task_hash":1800165463,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Week","start":4,"end":8,"id":1},{"text":"in","start":9,"end":11,"id":2},{"text":"Tech","start":12,"end":16,"id":3},{"text":":","start":16,"end":17,"id":4},{"text":"Navigating","start":18,"end":28,"id":5},{"text":"the","start":29,"end":32,"id":6},{"text":"Chinese","start":33,"end":40,"id":7},{"text":"Minefield","start":41,"end":50,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[259][0m {"text":"The Twilight of the Tech Idols","meta":{"source":"The New York Times"},"_input_hash":-1354784598,"_task_hash":-2136467881,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Twilight","start":4,"end":12,"id":1},{"text":"of","start":13,"end":15,"id":2},{"text":"the","start":16,"end":19,"id":3},{"text":"Tech","start":20,"end":24,"id":4},{"text":"Idols","start":25,"end":30,"id":5}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[260][0m {"text":"Silicon Valley Is Trying Out a New Mantra: Make a Profit","meta":{"source":"The New York Times"},"_input_hash":-1157133476,"_task_hash":-178433776,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"Is","start":15,"end":17,"id":2},{"text":"Trying","start":18,"end":24,"id":3},{"text":"Out","start":25,"end":28,"id":4},{"text":"a","start":29,"end":30,"id":5},{"text":"New","start":31,"end":34,"id":6},{"text":"Mantra","start":35,"end":41,"id":7},{"text":":","start":41,"end":42,"id":8},{"text":"Make","start":43,"end":47,"id":9},{"text":"a","start":48,"end":49,"id":10},{"text":"Profit","start":50,"end":56,"id":11}],"spans":[{"token_start":0,"token_end":1,"start":0,"end":14,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1157133476}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[261][0m {"text":"Was WeWork Ever Going to Work?","meta":{"source":"The New York Times"},"_input_hash":-1621690765,"_task_hash":-111581346,"tokens":[{"text":"Was","start":0,"end":3,"id":0},{"text":"WeWork","start":4,"end":10,"id":1},{"text":"Ever","start":11,"end":15,"id":2},{"text":"Going","start":16,"end":21,"id":3},{"text":"to","start":22,"end":24,"id":4},{"text":"Work","start":25,"end":29,"id":5},{"text":"?","start":29,"end":30,"id":6}],"spans":[{"start":4,"end":10,"token_start":1,"token_end":1,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[262][0m {"text":"From Your Mouth to Your Screen, Transcribing Takes the Next Step","meta":{"source":"The New York Times"},"_input_hash":934732693,"_task_hash":-490753875,"tokens":[{"text":"From","start":0,"end":4,"id":0},{"text":"Your","start":5,"end":9,"id":1},{"text":"Mouth","start":10,"end":15,"id":2},{"text":"to","start":16,"end":18,"id":3},{"text":"Your","start":19,"end":23,"id":4},{"text":"Screen","start":24,"end":30,"id":5},{"text":",","start":30,"end":31,"id":6},{"text":"Transcribing","start":32,"end":44,"id":7},{"text":"Takes","start":45,"end":50,"id":8},{"text":"the","start":51,"end":54,"id":9},{"text":"Next","start":55,"end":59,"id":10},{"text":"Step","start":60,"end":64,"id":11}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[263][0m {"text":"What if You Could Rent an Apartment Without a Security Deposit?","meta":{"source":"The New York Times"},"_input_hash":1762709597,"_task_hash":-108633265,"tokens":[{"text":"What","start":0,"end":4,"id":0},{"text":"if","start":5,"end":7,"id":1},{"text":"You","start":8,"end":11,"id":2},{"text":"Could","start":12,"end":17,"id":3},{"text":"Rent","start":18,"end":22,"id":4},{"text":"an","start":23,"end":25,"id":5},{"text":"Apartment","start":26,"end":35,"id":6},{"text":"Without","start":36,"end":43,"id":7},{"text":"a","start":44,"end":45,"id":8},{"text":"Security","start":46,"end":54,"id":9},{"text":"Deposit","start":55,"end":62,"id":10},{"text":"?","start":62,"end":63,"id":11}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[264][0m {"text":"Wall Street Deflates America\u2019s Favorite Start-Ups","meta":{"source":"The New York Times"},"_input_hash":203888491,"_task_hash":109099433,"tokens":[{"text":"Wall","start":0,"end":4,"id":0},{"text":"Street","start":5,"end":11,"id":1},{"text":"Deflates","start":12,"end":20,"id":2},{"text":"America","start":21,"end":28,"id":3},{"text":"\u2019s","start":28,"end":30,"id":4},{"text":"Favorite","start":31,"end":39,"id":5},{"text":"Start","start":40,"end":45,"id":6},{"text":"-","start":45,"end":46,"id":7},{"text":"Ups","start":46,"end":49,"id":8}],"spans":[{"start":0,"end":11,"token_start":0,"token_end":1,"label":"LOCATION"},{"start":21,"end":28,"token_start":3,"token_end":3,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[265][0m {"text":"SoftBank Bet Big on Disruptive Companies. Many Have Not Paid Off.","meta":{"source":"The New York Times"},"_input_hash":-1032566592,"_task_hash":-107244427,"tokens":[{"text":"SoftBank","start":0,"end":8,"id":0},{"text":"Bet","start":9,"end":12,"id":1},{"text":"Big","start":13,"end":16,"id":2},{"text":"on","start":17,"end":19,"id":3},{"text":"Disruptive","start":20,"end":30,"id":4},{"text":"Companies","start":31,"end":40,"id":5},{"text":".","start":40,"end":41,"id":6},{"text":"Many","start":42,"end":46,"id":7},{"text":"Have","start":47,"end":51,"id":8},{"text":"Not","start":52,"end":55,"id":9},{"text":"Paid","start":56,"end":60,"id":10},{"text":"Off","start":61,"end":64,"id":11},{"text":".","start":64,"end":65,"id":12}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":8,"text":"SoftBank","label":"ORG","source":"en_newshead_lg/","input_hash":-1032566592}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[266][0m {"text":"Open Offices Are a Capitalist Dead End","meta":{"source":"The New York Times"},"_input_hash":-395182056,"_task_hash":170751725,"tokens":[{"text":"Open","start":0,"end":4,"id":0},{"text":"Offices","start":5,"end":12,"id":1},{"text":"Are","start":13,"end":16,"id":2},{"text":"a","start":17,"end":18,"id":3},{"text":"Capitalist","start":19,"end":29,"id":4},{"text":"Dead","start":30,"end":34,"id":5},{"text":"End","start":35,"end":38,"id":6}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[267][0m {"text":"Inside Airbnb, Employees Eager for Big Payouts Pushed It to Go Public","meta":{"source":"The New York Times"},"_input_hash":1432674427,"_task_hash":71595887,"tokens":[{"text":"Inside","start":0,"end":6,"id":0},{"text":"Airbnb","start":7,"end":13,"id":1},{"text":",","start":13,"end":14,"id":2},{"text":"Employees","start":15,"end":24,"id":3},{"text":"Eager","start":25,"end":30,"id":4},{"text":"for","start":31,"end":34,"id":5},{"text":"Big","start":35,"end":38,"id":6},{"text":"Payouts","start":39,"end":46,"id":7},{"text":"Pushed","start":47,"end":53,"id":8},{"text":"It","start":54,"end":56,"id":9},{"text":"to","start":57,"end":59,"id":10},{"text":"Go","start":60,"end":62,"id":11},{"text":"Public","start":63,"end":69,"id":12}],"spans":[{"token_start":1,"token_end":1,"start":7,"end":13,"text":"Airbnb","label":"ORG","source":"en_newshead_lg/","input_hash":1432674427}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[268][0m {"text":"Silicon Valley Goes to Therapy","meta":{"source":"The New York Times"},"_input_hash":-1625455777,"_task_hash":1063297109,"tokens":[{"text":"Silicon","start":0,"end":7,"id":0},{"text":"Valley","start":8,"end":14,"id":1},{"text":"Goes","start":15,"end":19,"id":2},{"text":"to","start":20,"end":22,"id":3},{"text":"Therapy","start":23,"end":30,"id":4}],"spans":[{"token_start":0,"token_end":1,"start":0,"end":14,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1625455777}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[269][0m {"text":"Airbnb Says It Plans to Go Public in 2020","meta":{"source":"The New York Times"},"_input_hash":-1765443218,"_task_hash":-1249018866,"tokens":[{"text":"Airbnb","start":0,"end":6,"id":0},{"text":"Says","start":7,"end":11,"id":1},{"text":"It","start":12,"end":14,"id":2},{"text":"Plans","start":15,"end":20,"id":3},{"text":"to","start":21,"end":23,"id":4},{"text":"Go","start":24,"end":26,"id":5},{"text":"Public","start":27,"end":33,"id":6},{"text":"in","start":34,"end":36,"id":7},{"text":"2020","start":37,"end":41,"id":8}],"spans":[{"start":0,"end":6,"token_start":0,"token_end":0,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[270][0m {"text":"Hard Times in Silicon Valley? Not for the Payments Start-Up Stripe","meta":{"source":"The New York Times"},"_input_hash":-1513054901,"_task_hash":115079200,"tokens":[{"text":"Hard","start":0,"end":4,"id":0},{"text":"Times","start":5,"end":10,"id":1},{"text":"in","start":11,"end":13,"id":2},{"text":"Silicon","start":14,"end":21,"id":3},{"text":"Valley","start":22,"end":28,"id":4},{"text":"?","start":28,"end":29,"id":5},{"text":"Not","start":30,"end":33,"id":6},{"text":"for","start":34,"end":37,"id":7},{"text":"the","start":38,"end":41,"id":8},{"text":"Payments","start":42,"end":50,"id":9},{"text":"Start","start":51,"end":56,"id":10},{"text":"-","start":56,"end":57,"id":11},{"text":"Up","start":57,"end":59,"id":12},{"text":"Stripe","start":60,"end":66,"id":13}],"spans":[{"start":14,"end":28,"token_start":3,"token_end":4,"label":"LOCATION"},{"start":60,"end":66,"token_start":13,"token_end":13,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[271][0m {"text":"Eyes in the Sky Help Farmers on the Ground","meta":{"source":"The New York Times"},"_input_hash":-153459234,"_task_hash":-842829340,"tokens":[{"text":"Eyes","start":0,"end":4,"id":0},{"text":"in","start":5,"end":7,"id":1},{"text":"the","start":8,"end":11,"id":2},{"text":"Sky","start":12,"end":15,"id":3},{"text":"Help","start":16,"end":20,"id":4},{"text":"Farmers","start":21,"end":28,"id":5},{"text":"on","start":29,"end":31,"id":6},{"text":"the","start":32,"end":35,"id":7},{"text":"Ground","start":36,"end":42,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[272][0m {"text":"What\u2019s Your Great Beauty Idea?","meta":{"source":"The New York Times"},"_input_hash":-1828769491,"_task_hash":1668891266,"tokens":[{"text":"What","start":0,"end":4,"id":0},{"text":"\u2019s","start":4,"end":6,"id":1},{"text":"Your","start":7,"end":11,"id":2},{"text":"Great","start":12,"end":17,"id":3},{"text":"Beauty","start":18,"end":24,"id":4},{"text":"Idea","start":25,"end":29,"id":5},{"text":"?","start":29,"end":30,"id":6}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[273][0m {"text":"In Berlin, A.I. Start-ups Are Blazing New Trails","meta":{"source":"The New York Times"},"_input_hash":-1663886528,"_task_hash":355118848,"tokens":[{"text":"In","start":0,"end":2,"id":0},{"text":"Berlin","start":3,"end":9,"id":1},{"text":",","start":9,"end":10,"id":2},{"text":"A.I.","start":11,"end":15,"id":3},{"text":"Start","start":16,"end":21,"id":4},{"text":"-","start":21,"end":22,"id":5},{"text":"ups","start":22,"end":25,"id":6},{"text":"Are","start":26,"end":29,"id":7},{"text":"Blazing","start":30,"end":37,"id":8},{"text":"New","start":38,"end":41,"id":9},{"text":"Trails","start":42,"end":48,"id":10}],"spans":[{"start":3,"end":9,"token_start":1,"token_end":1,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[274][0m {"text":"Long Before \u2018Netflix and Chill,\u2019 He Was the Netflix C.E.O.","meta":{"source":"The New York Times"},"_input_hash":364369826,"_task_hash":2096658213,"tokens":[{"text":"Long","start":0,"end":4,"id":0},{"text":"Before","start":5,"end":11,"id":1},{"text":"\u2018","start":12,"end":13,"id":2},{"text":"Netflix","start":13,"end":20,"id":3},{"text":"and","start":21,"end":24,"id":4},{"text":"Chill","start":25,"end":30,"id":5},{"text":",","start":30,"end":31,"id":6},{"text":"\u2019","start":31,"end":32,"id":7},{"text":"He","start":33,"end":35,"id":8},{"text":"Was","start":36,"end":39,"id":9},{"text":"the","start":40,"end":43,"id":10},{"text":"Netflix","start":44,"end":51,"id":11},{"text":"C.E.O.","start":52,"end":58,"id":12}],"spans":[{"token_start":3,"token_end":3,"start":13,"end":20,"text":"Netflix","label":"ORG","source":"en_newshead_lg/","input_hash":364369826},{"token_start":11,"token_end":11,"start":44,"end":51,"text":"Netflix","label":"ORG","source":"en_newshead_lg/","input_hash":364369826}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[275][0m {"text":"WeWork\u2019s Efforts to Salvage I.P.O. Renew Fears About \u2018Unicorn\u2019 Era","meta":{"source":"The New York Times"},"_input_hash":-1671149011,"_task_hash":-1320593899,"tokens":[{"text":"WeWork","start":0,"end":6,"id":0},{"text":"\u2019s","start":6,"end":8,"id":1},{"text":"Efforts","start":9,"end":16,"id":2},{"text":"to","start":17,"end":19,"id":3},{"text":"Salvage","start":20,"end":27,"id":4},{"text":"I.P.O.","start":28,"end":34,"id":5},{"text":"Renew","start":35,"end":40,"id":6},{"text":"Fears","start":41,"end":46,"id":7},{"text":"About","start":47,"end":52,"id":8},{"text":"\u2018","start":53,"end":54,"id":9},{"text":"Unicorn","start":54,"end":61,"id":10},{"text":"\u2019","start":61,"end":62,"id":11},{"text":"Era","start":63,"end":66,"id":12}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":6,"text":"WeWork","label":"ORG","source":"en_newshead_lg/","input_hash":-1671149011}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[276][0m {"text":"Casper Dreams of Being Bigger Than Mattresses","meta":{"source":"The New York Times"},"_input_hash":448682399,"_task_hash":161012452,"tokens":[{"text":"Casper","start":0,"end":6,"id":0},{"text":"Dreams","start":7,"end":13,"id":1},{"text":"of","start":14,"end":16,"id":2},{"text":"Being","start":17,"end":22,"id":3},{"text":"Bigger","start":23,"end":29,"id":4},{"text":"Than","start":30,"end":34,"id":5},{"text":"Mattresses","start":35,"end":45,"id":6}],"spans":[{"start":0,"end":6,"token_start":0,"token_end":0,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[277][0m {"text":"The Week in Tech: Silicon Valley\u2019s Alternate Reality","meta":{"source":"The New York Times"},"_input_hash":-616900437,"_task_hash":-1483907465,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Week","start":4,"end":8,"id":1},{"text":"in","start":9,"end":11,"id":2},{"text":"Tech","start":12,"end":16,"id":3},{"text":":","start":16,"end":17,"id":4},{"text":"Silicon","start":18,"end":25,"id":5},{"text":"Valley","start":26,"end":32,"id":6},{"text":"\u2019s","start":32,"end":34,"id":7},{"text":"Alternate","start":35,"end":44,"id":8},{"text":"Reality","start":45,"end":52,"id":9}],"spans":[{"token_start":5,"token_end":6,"start":18,"end":32,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-616900437}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[278][0m {"text":"Transformation That Turned \u2018Fishing Village\u2019 Into China\u2019s Silicon Valley  \n","meta":{"source":"The New York Times"},"_input_hash":-1554976108,"_task_hash":2128044231,"tokens":[{"text":"Transformation","start":0,"end":14,"id":0},{"text":"That","start":15,"end":19,"id":1},{"text":"Turned","start":20,"end":26,"id":2},{"text":"\u2018","start":27,"end":28,"id":3},{"text":"Fishing","start":28,"end":35,"id":4},{"text":"Village","start":36,"end":43,"id":5},{"text":"\u2019","start":43,"end":44,"id":6},{"text":"Into","start":45,"end":49,"id":7},{"text":"China","start":50,"end":55,"id":8},{"text":"\u2019s","start":55,"end":57,"id":9},{"text":"Silicon","start":58,"end":65,"id":10},{"text":"Valley","start":66,"end":72,"id":11},{"text":" \n","start":73,"end":75,"id":12}],"spans":[{"token_start":8,"token_end":8,"start":50,"end":55,"text":"China","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1554976108},{"token_start":10,"token_end":11,"start":58,"end":72,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1554976108}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[279][0m {"text":"A European Tech Giant Is Born, Spun Off From a South African Firm","meta":{"source":"The New York Times"},"_input_hash":-1428777537,"_task_hash":-1332718498,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"European","start":2,"end":10,"id":1},{"text":"Tech","start":11,"end":15,"id":2},{"text":"Giant","start":16,"end":21,"id":3},{"text":"Is","start":22,"end":24,"id":4},{"text":"Born","start":25,"end":29,"id":5},{"text":",","start":29,"end":30,"id":6},{"text":"Spun","start":31,"end":35,"id":7},{"text":"Off","start":36,"end":39,"id":8},{"text":"From","start":40,"end":44,"id":9},{"text":"a","start":45,"end":46,"id":10},{"text":"South","start":47,"end":52,"id":11},{"text":"African","start":53,"end":60,"id":12},{"text":"Firm","start":61,"end":65,"id":13}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: True
[35m[47m[280][0m {"text":"Want to Do Business in Silicon Valley? Better Act Nice","meta":{"source":"The New York Times"},"_input_hash":1972656441,"_task_hash":228197250,"tokens":[{"text":"Want","start":0,"end":4,"id":0},{"text":"to","start":5,"end":7,"id":1},{"text":"Do","start":8,"end":10,"id":2},{"text":"Business","start":11,"end":19,"id":3},{"text":"in","start":20,"end":22,"id":4},{"text":"Silicon","start":23,"end":30,"id":5},{"text":"Valley","start":31,"end":37,"id":6},{"text":"?","start":37,"end":38,"id":7},{"text":"Better","start":39,"end":45,"id":8},{"text":"Act","start":46,"end":49,"id":9},{"text":"Nice","start":50,"end":54,"id":10}],"spans":[{"token_start":5,"token_end":6,"start":23,"end":37,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":1972656441}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[281][0m {"text":"To Cover Scooter Disruption, Take the Ride","meta":{"source":"The New York Times"},"_input_hash":-170470008,"_task_hash":-287431272,"tokens":[{"text":"To","start":0,"end":2,"id":0},{"text":"Cover","start":3,"end":8,"id":1},{"text":"Scooter","start":9,"end":16,"id":2},{"text":"Disruption","start":17,"end":27,"id":3},{"text":",","start":27,"end":28,"id":4},{"text":"Take","start":29,"end":33,"id":5},{"text":"the","start":34,"end":37,"id":6},{"text":"Ride","start":38,"end":42,"id":7}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[282][0m {"text":"When the A.I. Professor Leaves, Students Suffer, Study Says","meta":{"source":"The New York Times"},"_input_hash":1899150003,"_task_hash":-34222173,"tokens":[{"text":"When","start":0,"end":4,"id":0},{"text":"the","start":5,"end":8,"id":1},{"text":"A.I.","start":9,"end":13,"id":2},{"text":"Professor","start":14,"end":23,"id":3},{"text":"Leaves","start":24,"end":30,"id":4},{"text":",","start":30,"end":31,"id":5},{"text":"Students","start":32,"end":40,"id":6},{"text":"Suffer","start":41,"end":47,"id":7},{"text":",","start":47,"end":48,"id":8},{"text":"Study","start":49,"end":54,"id":9},{"text":"Says","start":55,"end":59,"id":10}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[283][0m {"text":"Start-Ups, Buckle Up for Hong Kong's Fintech Highway","meta":{"source":"The New York Times"},"_input_hash":1456389167,"_task_hash":-1421284036,"tokens":[{"text":"Start","start":0,"end":5,"id":0},{"text":"-","start":5,"end":6,"id":1},{"text":"Ups","start":6,"end":9,"id":2},{"text":",","start":9,"end":10,"id":3},{"text":"Buckle","start":11,"end":17,"id":4},{"text":"Up","start":18,"end":20,"id":5},{"text":"for","start":21,"end":24,"id":6},{"text":"Hong","start":25,"end":29,"id":7},{"text":"Kong","start":30,"end":34,"id":8},{"text":"'s","start":34,"end":36,"id":9},{"text":"Fintech","start":37,"end":44,"id":10},{"text":"Highway","start":45,"end":52,"id":11}],"spans":[{"start":25,"end":34,"token_start":7,"token_end":8,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[284][0m {"text":"Slack\u2019s Shares Plunge After It Predicts a Larger Loss","meta":{"source":"The New York Times"},"_input_hash":486967198,"_task_hash":1469458755,"tokens":[{"text":"Slack","start":0,"end":5,"id":0},{"text":"\u2019s","start":5,"end":7,"id":1},{"text":"Shares","start":8,"end":14,"id":2},{"text":"Plunge","start":15,"end":21,"id":3},{"text":"After","start":22,"end":27,"id":4},{"text":"It","start":28,"end":30,"id":5},{"text":"Predicts","start":31,"end":39,"id":6},{"text":"a","start":40,"end":41,"id":7},{"text":"Larger","start":42,"end":48,"id":8},{"text":"Loss","start":49,"end":53,"id":9}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":5,"text":"Slack","label":"ORG","source":"en_newshead_lg/","input_hash":486967198}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[285][0m {"text":"Considering a Sabbatical? The National Parks Want You","meta":{"source":"The New York Times"},"_input_hash":874652410,"_task_hash":1877500694,"tokens":[{"text":"Considering","start":0,"end":11,"id":0},{"text":"a","start":12,"end":13,"id":1},{"text":"Sabbatical","start":14,"end":24,"id":2},{"text":"?","start":24,"end":25,"id":3},{"text":"The","start":26,"end":29,"id":4},{"text":"National","start":30,"end":38,"id":5},{"text":"Parks","start":39,"end":44,"id":6},{"text":"Want","start":45,"end":49,"id":7},{"text":"You","start":50,"end":53,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[286][0m {"text":"A Greenhouse Large Enough to Feed the Eastern Seaboard","meta":{"source":"The New York Times"},"_input_hash":1111436631,"_task_hash":-2077064814,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Greenhouse","start":2,"end":12,"id":1},{"text":"Large","start":13,"end":18,"id":2},{"text":"Enough","start":19,"end":25,"id":3},{"text":"to","start":26,"end":28,"id":4},{"text":"Feed","start":29,"end":33,"id":5},{"text":"the","start":34,"end":37,"id":6},{"text":"Eastern","start":38,"end":45,"id":7},{"text":"Seaboard","start":46,"end":54,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[287][0m {"text":"Blocked in Business, South Korean Women Start Their Own","meta":{"source":"The New York Times"},"_input_hash":2047946032,"_task_hash":1341730831,"tokens":[{"text":"Blocked","start":0,"end":7,"id":0},{"text":"in","start":8,"end":10,"id":1},{"text":"Business","start":11,"end":19,"id":2},{"text":",","start":19,"end":20,"id":3},{"text":"South","start":21,"end":26,"id":4},{"text":"Korean","start":27,"end":33,"id":5},{"text":"Women","start":34,"end":39,"id":6},{"text":"Start","start":40,"end":45,"id":7},{"text":"Their","start":46,"end":51,"id":8},{"text":"Own","start":52,"end":55,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[288][0m {"text":"Founders of Successful Tech Companies Are Mostly Middle-Aged","meta":{"source":"The New York Times"},"_input_hash":-502477362,"_task_hash":338212775,"tokens":[{"text":"Founders","start":0,"end":8,"id":0},{"text":"of","start":9,"end":11,"id":1},{"text":"Successful","start":12,"end":22,"id":2},{"text":"Tech","start":23,"end":27,"id":3},{"text":"Companies","start":28,"end":37,"id":4},{"text":"Are","start":38,"end":41,"id":5},{"text":"Mostly","start":42,"end":48,"id":6},{"text":"Middle","start":49,"end":55,"id":7},{"text":"-","start":55,"end":56,"id":8},{"text":"Aged","start":56,"end":60,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[289][0m {"text":"Peloton Is a Phenomenon. Can It Last?","meta":{"source":"The New York Times"},"_input_hash":1862146422,"_task_hash":-926267784,"tokens":[{"text":"Peloton","start":0,"end":7,"id":0},{"text":"Is","start":8,"end":10,"id":1},{"text":"a","start":11,"end":12,"id":2},{"text":"Phenomenon","start":13,"end":23,"id":3},{"text":".","start":23,"end":24,"id":4},{"text":"Can","start":25,"end":28,"id":5},{"text":"It","start":29,"end":31,"id":6},{"text":"Last","start":32,"end":36,"id":7},{"text":"?","start":36,"end":37,"id":8}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":7,"text":"Peloton","label":"ORG","source":"en_newshead_lg/","input_hash":1862146422}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[290][0m {"text":"How Uber Got Lost","meta":{"source":"The New York Times"},"_input_hash":2032455885,"_task_hash":-1030739551,"tokens":[{"text":"How","start":0,"end":3,"id":0},{"text":"Uber","start":4,"end":8,"id":1},{"text":"Got","start":9,"end":12,"id":2},{"text":"Lost","start":13,"end":17,"id":3}],"spans":[{"start":4,"end":8,"token_start":1,"token_end":1,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[291][0m {"text":"Inside India\u2019s Messy Electric Vehicle Revolution","meta":{"source":"The New York Times"},"_input_hash":-369459180,"_task_hash":1444300712,"tokens":[{"text":"Inside","start":0,"end":6,"id":0},{"text":"India","start":7,"end":12,"id":1},{"text":"\u2019s","start":12,"end":14,"id":2},{"text":"Messy","start":15,"end":20,"id":3},{"text":"Electric","start":21,"end":29,"id":4},{"text":"Vehicle","start":30,"end":37,"id":5},{"text":"Revolution","start":38,"end":48,"id":6}],"spans":[{"token_start":1,"token_end":1,"start":7,"end":12,"text":"India","label":"ORG","source":"en_newshead_lg/","input_hash":-369459180}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[292][0m {"text":"How Opportunity Zones and Co-Working Spaces Joined Forces","meta":{"source":"The New York Times"},"_input_hash":-63133423,"_task_hash":-2096249061,"tokens":[{"text":"How","start":0,"end":3,"id":0},{"text":"Opportunity","start":4,"end":15,"id":1},{"text":"Zones","start":16,"end":21,"id":2},{"text":"and","start":22,"end":25,"id":3},{"text":"Co","start":26,"end":28,"id":4},{"text":"-","start":28,"end":29,"id":5},{"text":"Working","start":29,"end":36,"id":6},{"text":"Spaces","start":37,"end":43,"id":7},{"text":"Joined","start":44,"end":50,"id":8},{"text":"Forces","start":51,"end":57,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[293][0m {"text":"To Power A.I., Start-Up Creates a Giant Computer Chip","meta":{"source":"The New York Times"},"_input_hash":682506275,"_task_hash":-1450185423,"tokens":[{"text":"To","start":0,"end":2,"id":0},{"text":"Power","start":3,"end":8,"id":1},{"text":"A.I.","start":9,"end":13,"id":2},{"text":",","start":13,"end":14,"id":3},{"text":"Start","start":15,"end":20,"id":4},{"text":"-","start":20,"end":21,"id":5},{"text":"Up","start":21,"end":23,"id":6},{"text":"Creates","start":24,"end":31,"id":7},{"text":"a","start":32,"end":33,"id":8},{"text":"Giant","start":34,"end":39,"id":9},{"text":"Computer","start":40,"end":48,"id":10},{"text":"Chip","start":49,"end":53,"id":11}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[294][0m {"text":"WeWork Takes Key Step Toward I.P.O., Citing Heady Growth and Huge Losses","meta":{"source":"The New York Times"},"_input_hash":170679812,"_task_hash":2008406802,"tokens":[{"text":"WeWork","start":0,"end":6,"id":0},{"text":"Takes","start":7,"end":12,"id":1},{"text":"Key","start":13,"end":16,"id":2},{"text":"Step","start":17,"end":21,"id":3},{"text":"Toward","start":22,"end":28,"id":4},{"text":"I.P.O.","start":29,"end":35,"id":5},{"text":",","start":35,"end":36,"id":6},{"text":"Citing","start":37,"end":43,"id":7},{"text":"Heady","start":44,"end":49,"id":8},{"text":"Growth","start":50,"end":56,"id":9},{"text":"and","start":57,"end":60,"id":10},{"text":"Huge","start":61,"end":65,"id":11},{"text":"Losses","start":66,"end":72,"id":12}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":6,"text":"WeWork","label":"ORG","source":"en_newshead_lg/","input_hash":170679812}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[295][0m {"text":"This High-Tech Solution to Disaster Response May Be Too Good to Be True","meta":{"source":"The New York Times"},"_input_hash":403369945,"_task_hash":-876975374,"tokens":[{"text":"This","start":0,"end":4,"id":0},{"text":"High","start":5,"end":9,"id":1},{"text":"-","start":9,"end":10,"id":2},{"text":"Tech","start":10,"end":14,"id":3},{"text":"Solution","start":15,"end":23,"id":4},{"text":"to","start":24,"end":26,"id":5},{"text":"Disaster","start":27,"end":35,"id":6},{"text":"Response","start":36,"end":44,"id":7},{"text":"May","start":45,"end":48,"id":8},{"text":"Be","start":49,"end":51,"id":9},{"text":"Too","start":52,"end":55,"id":10},{"text":"Good","start":56,"end":60,"id":11},{"text":"to","start":61,"end":63,"id":12},{"text":"Be","start":64,"end":66,"id":13},{"text":"True","start":67,"end":71,"id":14}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[296][0m {"text":"Bad Times in Tech? Not if You\u2019re a Start-Up Serving Other Start-Ups","meta":{"source":"The New York Times"},"_input_hash":-2121512734,"_task_hash":292884595,"tokens":[{"text":"Bad","start":0,"end":3,"id":0},{"text":"Times","start":4,"end":9,"id":1},{"text":"in","start":10,"end":12,"id":2},{"text":"Tech","start":13,"end":17,"id":3},{"text":"?","start":17,"end":18,"id":4},{"text":"Not","start":19,"end":22,"id":5},{"text":"if","start":23,"end":25,"id":6},{"text":"You","start":26,"end":29,"id":7},{"text":"\u2019re","start":29,"end":32,"id":8},{"text":"a","start":33,"end":34,"id":9},{"text":"Start","start":35,"end":40,"id":10},{"text":"-","start":40,"end":41,"id":11},{"text":"Up","start":41,"end":43,"id":12},{"text":"Serving","start":44,"end":51,"id":13},{"text":"Other","start":52,"end":57,"id":14},{"text":"Start","start":58,"end":63,"id":15},{"text":"-","start":63,"end":64,"id":16},{"text":"Ups","start":64,"end":67,"id":17}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[297][0m {"text":"\u2018General Magic\u2019 Review: A Startup Before Its Time","meta":{"source":"The New York Times"},"_input_hash":-1678816277,"_task_hash":88746082,"tokens":[{"text":"\u2018","start":0,"end":1,"id":0},{"text":"General","start":1,"end":8,"id":1},{"text":"Magic","start":9,"end":14,"id":2},{"text":"\u2019","start":14,"end":15,"id":3},{"text":"Review","start":16,"end":22,"id":4},{"text":":","start":22,"end":23,"id":5},{"text":"A","start":24,"end":25,"id":6},{"text":"Startup","start":26,"end":33,"id":7},{"text":"Before","start":34,"end":40,"id":8},{"text":"Its","start":41,"end":44,"id":9},{"text":"Time","start":45,"end":49,"id":10}],"spans":[{"start":1,"end":14,"token_start":1,"token_end":2,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[298][0m {"text":"Bird Is Said to Raise New Funding at $2.5 Billion Valuation","meta":{"source":"The New York Times"},"_input_hash":-855866349,"_task_hash":-1202586372,"tokens":[{"text":"Bird","start":0,"end":4,"id":0},{"text":"Is","start":5,"end":7,"id":1},{"text":"Said","start":8,"end":12,"id":2},{"text":"to","start":13,"end":15,"id":3},{"text":"Raise","start":16,"end":21,"id":4},{"text":"New","start":22,"end":25,"id":5},{"text":"Funding","start":26,"end":33,"id":6},{"text":"at","start":34,"end":36,"id":7},{"text":"$","start":37,"end":38,"id":8},{"text":"2.5","start":38,"end":41,"id":9},{"text":"Billion","start":42,"end":49,"id":10},{"text":"Valuation","start":50,"end":59,"id":11}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":4,"text":"Bird","label":"ORG","source":"en_newshead_lg/","input_hash":-855866349}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[299][0m {"text":"Contact Lens Start-Up, Big on Social Media, May Be Bad for Eyes, Doctors Say","meta":{"source":"The New York Times"},"_input_hash":1465275627,"_task_hash":1158316758,"tokens":[{"text":"Contact","start":0,"end":7,"id":0},{"text":"Lens","start":8,"end":12,"id":1},{"text":"Start","start":13,"end":18,"id":2},{"text":"-","start":18,"end":19,"id":3},{"text":"Up","start":19,"end":21,"id":4},{"text":",","start":21,"end":22,"id":5},{"text":"Big","start":23,"end":26,"id":6},{"text":"on","start":27,"end":29,"id":7},{"text":"Social","start":30,"end":36,"id":8},{"text":"Media","start":37,"end":42,"id":9},{"text":",","start":42,"end":43,"id":10},{"text":"May","start":44,"end":47,"id":11},{"text":"Be","start":48,"end":50,"id":12},{"text":"Bad","start":51,"end":54,"id":13},{"text":"for","start":55,"end":58,"id":14},{"text":"Eyes","start":59,"end":63,"id":15},{"text":",","start":63,"end":64,"id":16},{"text":"Doctors","start":65,"end":72,"id":17},{"text":"Say","start":73,"end":76,"id":18}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[300][0m {"text":"Facial Recognition Tech Is Growing Stronger, Thanks to Your Face","meta":{"source":"The New York Times"},"_input_hash":-1251124173,"_task_hash":-711531307,"tokens":[{"text":"Facial","start":0,"end":6,"id":0},{"text":"Recognition","start":7,"end":18,"id":1},{"text":"Tech","start":19,"end":23,"id":2},{"text":"Is","start":24,"end":26,"id":3},{"text":"Growing","start":27,"end":34,"id":4},{"text":"Stronger","start":35,"end":43,"id":5},{"text":",","start":43,"end":44,"id":6},{"text":"Thanks","start":45,"end":51,"id":7},{"text":"to","start":52,"end":54,"id":8},{"text":"Your","start":55,"end":59,"id":9},{"text":"Face","start":60,"end":64,"id":10}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[301][0m {"text":"A Startup for Geeks in Gaza","meta":{"source":"The New York Times"},"_input_hash":-1897013908,"_task_hash":-1784459861,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Startup","start":2,"end":9,"id":1},{"text":"for","start":10,"end":13,"id":2},{"text":"Geeks","start":14,"end":19,"id":3},{"text":"in","start":20,"end":22,"id":4},{"text":"Gaza","start":23,"end":27,"id":5}],"spans":[{"token_start":5,"token_end":5,"start":23,"end":27,"text":"Gaza","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1897013908}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[302][0m {"text":"The Micro-Mini Startup","meta":{"source":"The New York Times"},"_input_hash":-686136672,"_task_hash":-1888873673,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"Micro","start":4,"end":9,"id":1},{"text":"-","start":9,"end":10,"id":2},{"text":"Mini","start":10,"end":14,"id":3},{"text":"Startup","start":15,"end":22,"id":4}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[303][0m {"text":"Where Startups Compete for Attention","meta":{"source":"The New York Times"},"_input_hash":-141914111,"_task_hash":-998421919,"tokens":[{"text":"Where","start":0,"end":5,"id":0},{"text":"Startups","start":6,"end":14,"id":1},{"text":"Compete","start":15,"end":22,"id":2},{"text":"for","start":23,"end":26,"id":3},{"text":"Attention","start":27,"end":36,"id":4}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[304][0m {"text":"Energy Startups File for I.P.O.s","meta":{"source":"The New York Times"},"_input_hash":-1937785327,"_task_hash":-1270078110,"tokens":[{"text":"Energy","start":0,"end":6,"id":0},{"text":"Startups","start":7,"end":15,"id":1},{"text":"File","start":16,"end":20,"id":2},{"text":"for","start":21,"end":24,"id":3},{"text":"I.P.O.s","start":25,"end":32,"id":4}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[305][0m {"text":"NYC Seed Nurtures Homegrown Startups","meta":{"source":"The New York Times"},"_input_hash":-420718800,"_task_hash":1874415028,"tokens":[{"text":"NYC","start":0,"end":3,"id":0},{"text":"Seed","start":4,"end":8,"id":1},{"text":"Nurtures","start":9,"end":17,"id":2},{"text":"Homegrown","start":18,"end":27,"id":3},{"text":"Startups","start":28,"end":36,"id":4}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[306][0m {"text":"Kickstarter Surprises Tech Startup","meta":{"source":"The New York Times"},"_input_hash":-2052854028,"_task_hash":-1806566479,"tokens":[{"text":"Kickstarter","start":0,"end":11,"id":0},{"text":"Surprises","start":12,"end":21,"id":1},{"text":"Tech","start":22,"end":26,"id":2},{"text":"Startup","start":27,"end":34,"id":3}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":11,"text":"Kickstarter","label":"ORG","source":"en_newshead_lg/","input_hash":-2052854028}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[307][0m {"text":"Plant Startup Challenged","meta":{"source":"The New York Times"},"_input_hash":18357704,"_task_hash":-1495593406,"tokens":[{"text":"Plant","start":0,"end":5,"id":0},{"text":"Startup","start":6,"end":13,"id":1},{"text":"Challenged","start":14,"end":24,"id":2}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[308][0m {"text":"Venture Capital and Startups Feel the Pain","meta":{"source":"The New York Times"},"_input_hash":938813663,"_task_hash":1419319258,"tokens":[{"text":"Venture","start":0,"end":7,"id":0},{"text":"Capital","start":8,"end":15,"id":1},{"text":"and","start":16,"end":19,"id":2},{"text":"Startups","start":20,"end":28,"id":3},{"text":"Feel","start":29,"end":33,"id":4},{"text":"the","start":34,"end":37,"id":5},{"text":"Pain","start":38,"end":42,"id":6}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[309][0m {"text":"A Student Startup and Its Outsize Wagnerian Dream","meta":{"source":"The New York Times"},"_input_hash":-2055965093,"_task_hash":-1780014683,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Student","start":2,"end":9,"id":1},{"text":"Startup","start":10,"end":17,"id":2},{"text":"and","start":18,"end":21,"id":3},{"text":"Its","start":22,"end":25,"id":4},{"text":"Outsize","start":26,"end":33,"id":5},{"text":"Wagnerian","start":34,"end":43,"id":6},{"text":"Dream","start":44,"end":49,"id":7}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[310][0m {"text":"Global tech startups choosing Shenzhen","meta":{"source":"The New York Times"},"_input_hash":950323660,"_task_hash":1278689210,"tokens":[{"text":"Global","start":0,"end":6,"id":0},{"text":"tech","start":7,"end":11,"id":1},{"text":"startups","start":12,"end":20,"id":2},{"text":"choosing","start":21,"end":29,"id":3},{"text":"Shenzhen","start":30,"end":38,"id":4}],"spans":[{"start":30,"end":38,"token_start":4,"token_end":4,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: True
[35m[47m[311][0m {"text":"Some Players See a Startup League","meta":{"source":"The New York Times"},"_input_hash":-31473013,"_task_hash":1422470991,"tokens":[{"text":"Some","start":0,"end":4,"id":0},{"text":"Players","start":5,"end":12,"id":1},{"text":"See","start":13,"end":16,"id":2},{"text":"a","start":17,"end":18,"id":3},{"text":"Startup","start":19,"end":26,"id":4},{"text":"League","start":27,"end":33,"id":5}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[312][0m {"text":"Saving the World, Startup-Style","meta":{"source":"The New York Times"},"_input_hash":-709570186,"_task_hash":-2034237107,"tokens":[{"text":"Saving","start":0,"end":6,"id":0},{"text":"the","start":7,"end":10,"id":1},{"text":"World","start":11,"end":16,"id":2},{"text":",","start":16,"end":17,"id":3},{"text":"Startup","start":18,"end":25,"id":4},{"text":"-","start":25,"end":26,"id":5},{"text":"Style","start":26,"end":31,"id":6}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[313][0m {"text":"BlackBerry: the crash that launched 1,000 startups","meta":{"source":"The New York Times"},"_input_hash":502982110,"_task_hash":856831385,"tokens":[{"text":"BlackBerry","start":0,"end":10,"id":0},{"text":":","start":10,"end":11,"id":1},{"text":"the","start":12,"end":15,"id":2},{"text":"crash","start":16,"end":21,"id":3},{"text":"that","start":22,"end":26,"id":4},{"text":"launched","start":27,"end":35,"id":5},{"text":"1,000","start":36,"end":41,"id":6},{"text":"startups","start":42,"end":50,"id":7}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":10,"text":"BlackBerry","label":"ORG","source":"en_newshead_lg/","input_hash":502982110}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[314][0m {"text":"New Round of Funding for a Biotech Startup","meta":{"source":"The New York Times"},"_input_hash":2135657039,"_task_hash":-91587987,"tokens":[{"text":"New","start":0,"end":3,"id":0},{"text":"Round","start":4,"end":9,"id":1},{"text":"of","start":10,"end":12,"id":2},{"text":"Funding","start":13,"end":20,"id":3},{"text":"for","start":21,"end":24,"id":4},{"text":"a","start":25,"end":26,"id":5},{"text":"Biotech","start":27,"end":34,"id":6},{"text":"Startup","start":35,"end":42,"id":7}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[315][0m {"text":"Startup Valuations Show Strong Growth","meta":{"source":"The New York Times"},"_input_hash":-1714122815,"_task_hash":-210039181,"tokens":[{"text":"Startup","start":0,"end":7,"id":0},{"text":"Valuations","start":8,"end":18,"id":1},{"text":"Show","start":19,"end":23,"id":2},{"text":"Strong","start":24,"end":30,"id":3},{"text":"Growth","start":31,"end":37,"id":4}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[316][0m {"text":"GEMFIRE STARTUP RAISES NEW FUNDS","meta":{"source":"The New York Times"},"_input_hash":-197127417,"_task_hash":115191504,"tokens":[{"text":"GEMFIRE","start":0,"end":7,"id":0},{"text":"STARTUP","start":8,"end":15,"id":1},{"text":"RAISES","start":16,"end":22,"id":2},{"text":"NEW","start":23,"end":26,"id":3},{"text":"FUNDS","start":27,"end":32,"id":4}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[317][0m {"text":"After a Year, Startup America Has a Start","meta":{"source":"The New York Times"},"_input_hash":356852429,"_task_hash":-1517711430,"tokens":[{"text":"After","start":0,"end":5,"id":0},{"text":"a","start":6,"end":7,"id":1},{"text":"Year","start":8,"end":12,"id":2},{"text":",","start":12,"end":13,"id":3},{"text":"Startup","start":14,"end":21,"id":4},{"text":"America","start":22,"end":29,"id":5},{"text":"Has","start":30,"end":33,"id":6},{"text":"a","start":34,"end":35,"id":7},{"text":"Start","start":36,"end":41,"id":8}],"spans":[{"start":22,"end":29,"token_start":5,"token_end":5,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[318][0m {"text":"Green Battery Startup Starts Small","meta":{"source":"The New York Times"},"_input_hash":-1467433137,"_task_hash":-346560263,"tokens":[{"text":"Green","start":0,"end":5,"id":0},{"text":"Battery","start":6,"end":13,"id":1},{"text":"Startup","start":14,"end":21,"id":2},{"text":"Starts","start":22,"end":28,"id":3},{"text":"Small","start":29,"end":34,"id":4}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[319][0m {"text":"Late-Stage Startups Living in a Sartre Play?","meta":{"source":"The New York Times"},"_input_hash":-835035041,"_task_hash":-520200178,"tokens":[{"text":"Late","start":0,"end":4,"id":0},{"text":"-","start":4,"end":5,"id":1},{"text":"Stage","start":5,"end":10,"id":2},{"text":"Startups","start":11,"end":19,"id":3},{"text":"Living","start":20,"end":26,"id":4},{"text":"in","start":27,"end":29,"id":5},{"text":"a","start":30,"end":31,"id":6},{"text":"Sartre","start":32,"end":38,"id":7},{"text":"Play","start":39,"end":43,"id":8},{"text":"?","start":43,"end":44,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[320][0m {"text":"Skype Dials Up Deal for Startup","meta":{"source":"The New York Times"},"_input_hash":745709949,"_task_hash":1214854332,"tokens":[{"text":"Skype","start":0,"end":5,"id":0},{"text":"Dials","start":6,"end":11,"id":1},{"text":"Up","start":12,"end":14,"id":2},{"text":"Deal","start":15,"end":19,"id":3},{"text":"for","start":20,"end":23,"id":4},{"text":"Startup","start":24,"end":31,"id":5}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":5,"text":"Skype","label":"ORG","source":"en_newshead_lg/","input_hash":745709949}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[321][0m {"text":"Facebook Throws the Book at Internet Startup","meta":{"source":"The New York Times"},"_input_hash":2046779698,"_task_hash":-1413927107,"tokens":[{"text":"Facebook","start":0,"end":8,"id":0},{"text":"Throws","start":9,"end":15,"id":1},{"text":"the","start":16,"end":19,"id":2},{"text":"Book","start":20,"end":24,"id":3},{"text":"at","start":25,"end":27,"id":4},{"text":"Internet","start":28,"end":36,"id":5},{"text":"Startup","start":37,"end":44,"id":6}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":8,"text":"Facebook","label":"ORG","source":"en_newshead_lg/","input_hash":2046779698}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[322][0m {"text":"Social Gaming Startup Gets $5 Million","meta":{"source":"The New York Times"},"_input_hash":372587110,"_task_hash":-1176793847,"tokens":[{"text":"Social","start":0,"end":6,"id":0},{"text":"Gaming","start":7,"end":13,"id":1},{"text":"Startup","start":14,"end":21,"id":2},{"text":"Gets","start":22,"end":26,"id":3},{"text":"$","start":27,"end":28,"id":4},{"text":"5","start":28,"end":29,"id":5},{"text":"Million","start":30,"end":37,"id":6}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[323][0m {"text":"Q & A: Speeding Up a Slow Windows Startup","meta":{"source":"The New York Times"},"_input_hash":-802055181,"_task_hash":-1871114306,"tokens":[{"text":"Q","start":0,"end":1,"id":0},{"text":"&","start":2,"end":3,"id":1},{"text":"A","start":4,"end":5,"id":2},{"text":":","start":5,"end":6,"id":3},{"text":"Speeding","start":7,"end":15,"id":4},{"text":"Up","start":16,"end":18,"id":5},{"text":"a","start":19,"end":20,"id":6},{"text":"Slow","start":21,"end":25,"id":7},{"text":"Windows","start":26,"end":33,"id":8},{"text":"Startup","start":34,"end":41,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[324][0m {"text":"Teen Startup: 18 and Wired For Business","meta":{"source":"The New York Times"},"_input_hash":-11895532,"_task_hash":-1762966215,"tokens":[{"text":"Teen","start":0,"end":4,"id":0},{"text":"Startup","start":5,"end":12,"id":1},{"text":":","start":12,"end":13,"id":2},{"text":"18","start":14,"end":16,"id":3},{"text":"and","start":17,"end":20,"id":4},{"text":"Wired","start":21,"end":26,"id":5},{"text":"For","start":27,"end":30,"id":6},{"text":"Business","start":31,"end":39,"id":7}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[325][0m {"text":"Spitzer Scandal Boosts Music Startup","meta":{"source":"The New York Times"},"_input_hash":1571456510,"_task_hash":-1608780164,"tokens":[{"text":"Spitzer","start":0,"end":7,"id":0},{"text":"Scandal","start":8,"end":15,"id":1},{"text":"Boosts","start":16,"end":22,"id":2},{"text":"Music","start":23,"end":28,"id":3},{"text":"Startup","start":29,"end":36,"id":4}],"spans":[{"start":0,"end":7,"token_start":0,"token_end":0,"label":"PERSON"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[326][0m {"text":"Former Amazon Executive Mum on Stealth Startup","meta":{"source":"The New York Times"},"_input_hash":-1127699758,"_task_hash":1952770492,"tokens":[{"text":"Former","start":0,"end":6,"id":0},{"text":"Amazon","start":7,"end":13,"id":1},{"text":"Executive","start":14,"end":23,"id":2},{"text":"Mum","start":24,"end":27,"id":3},{"text":"on","start":28,"end":30,"id":4},{"text":"Stealth","start":31,"end":38,"id":5},{"text":"Startup","start":39,"end":46,"id":6}],"spans":[{"token_start":1,"token_end":1,"start":7,"end":13,"text":"Amazon","label":"ORG","source":"en_newshead_lg/","input_hash":-1127699758}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[327][0m {"text":"Improving Startup Time in the NYTimes Android App","meta":{"source":"The New York Times"},"_input_hash":186916574,"_task_hash":9176852,"tokens":[{"text":"Improving","start":0,"end":9,"id":0},{"text":"Startup","start":10,"end":17,"id":1},{"text":"Time","start":18,"end":22,"id":2},{"text":"in","start":23,"end":25,"id":3},{"text":"the","start":26,"end":29,"id":4},{"text":"NYTimes","start":30,"end":37,"id":5},{"text":"Android","start":38,"end":45,"id":6},{"text":"App","start":46,"end":49,"id":7}],"spans":[{"start":30,"end":37,"token_start":5,"token_end":5,"label":"ORG"},{"start":38,"end":45,"token_start":6,"token_end":6,"label":"PRODUCT"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[328][0m {"text":"As Tech Giants Hunt for Startups, Oracle Pounces","meta":{"source":"The New York Times"},"_input_hash":-1927547288,"_task_hash":-1287581625,"tokens":[{"text":"As","start":0,"end":2,"id":0},{"text":"Tech","start":3,"end":7,"id":1},{"text":"Giants","start":8,"end":14,"id":2},{"text":"Hunt","start":15,"end":19,"id":3},{"text":"for","start":20,"end":23,"id":4},{"text":"Startups","start":24,"end":32,"id":5},{"text":",","start":32,"end":33,"id":6},{"text":"Oracle","start":34,"end":40,"id":7},{"text":"Pounces","start":41,"end":48,"id":8}],"spans":[{"token_start":7,"token_end":7,"start":34,"end":40,"text":"Oracle","label":"ORG","source":"en_newshead_lg/","input_hash":-1927547288}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[329][0m {"text":"A venture investor on Asia's startups and the 'next China'","meta":{"source":"The New York Times"},"_input_hash":-425093435,"_task_hash":-984333410,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"venture","start":2,"end":9,"id":1},{"text":"investor","start":10,"end":18,"id":2},{"text":"on","start":19,"end":21,"id":3},{"text":"Asia","start":22,"end":26,"id":4},{"text":"'s","start":26,"end":28,"id":5},{"text":"startups","start":29,"end":37,"id":6},{"text":"and","start":38,"end":41,"id":7},{"text":"the","start":42,"end":45,"id":8},{"text":"'","start":46,"end":47,"id":9},{"text":"next","start":47,"end":51,"id":10},{"text":"China","start":52,"end":57,"id":11},{"text":"'","start":57,"end":58,"id":12}],"spans":[{"start":22,"end":26,"token_start":4,"token_end":4,"label":"LOCATION"},{"start":52,"end":57,"token_start":11,"token_end":11,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[330][0m {"text":"Mystery Startup Gets Kleiner Perkins\u2019s Backing","meta":{"source":"The New York Times"},"_input_hash":71358904,"_task_hash":-1227023725,"tokens":[{"text":"Mystery","start":0,"end":7,"id":0},{"text":"Startup","start":8,"end":15,"id":1},{"text":"Gets","start":16,"end":20,"id":2},{"text":"Kleiner","start":21,"end":28,"id":3},{"text":"Perkins","start":29,"end":36,"id":4},{"text":"\u2019s","start":36,"end":38,"id":5},{"text":"Backing","start":39,"end":46,"id":6}],"spans":[{"start":21,"end":36,"token_start":3,"token_end":4,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[331][0m {"text":"Startups look to Vienna as next big thing","meta":{"source":"The New York Times"},"_input_hash":2098370953,"_task_hash":-874686235,"tokens":[{"text":"Startups","start":0,"end":8,"id":0},{"text":"look","start":9,"end":13,"id":1},{"text":"to","start":14,"end":16,"id":2},{"text":"Vienna","start":17,"end":23,"id":3},{"text":"as","start":24,"end":26,"id":4},{"text":"next","start":27,"end":31,"id":5},{"text":"big","start":32,"end":35,"id":6},{"text":"thing","start":36,"end":41,"id":7}],"spans":[{"token_start":3,"token_end":3,"start":17,"end":23,"text":"Vienna","label":"LOCATION","source":"en_newshead_lg/","input_hash":2098370953}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[332][0m {"text":"Seattle Wireless Startups Attract V.C. Funds","meta":{"source":"The New York Times"},"_input_hash":1397087983,"_task_hash":767322244,"tokens":[{"text":"Seattle","start":0,"end":7,"id":0},{"text":"Wireless","start":8,"end":16,"id":1},{"text":"Startups","start":17,"end":25,"id":2},{"text":"Attract","start":26,"end":33,"id":3},{"text":"V.C.","start":34,"end":38,"id":4},{"text":"Funds","start":39,"end":44,"id":5}],"spans":[{"start":0,"end":7,"token_start":0,"token_end":0,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[333][0m {"text":"Today in Small Business: \u2018Startup Guy\u2019 Fashion","meta":{"source":"The New York Times"},"_input_hash":1639451672,"_task_hash":1993916197,"tokens":[{"text":"Today","start":0,"end":5,"id":0},{"text":"in","start":6,"end":8,"id":1},{"text":"Small","start":9,"end":14,"id":2},{"text":"Business","start":15,"end":23,"id":3},{"text":":","start":23,"end":24,"id":4},{"text":"\u2018","start":25,"end":26,"id":5},{"text":"Startup","start":26,"end":33,"id":6},{"text":"Guy","start":34,"end":37,"id":7},{"text":"\u2019","start":37,"end":38,"id":8},{"text":"Fashion","start":39,"end":46,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[334][0m {"text":"Smartphone startups have friend in fund","meta":{"source":"The New York Times"},"_input_hash":640980176,"_task_hash":-1742253628,"tokens":[{"text":"Smartphone","start":0,"end":10,"id":0},{"text":"startups","start":11,"end":19,"id":1},{"text":"have","start":20,"end":24,"id":2},{"text":"friend","start":25,"end":31,"id":3},{"text":"in","start":32,"end":34,"id":4},{"text":"fund","start":35,"end":39,"id":5}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[335][0m {"text":"Tech Talk Podcast: Risking Millions on Startups","meta":{"source":"The New York Times"},"_input_hash":-1273226041,"_task_hash":1404783728,"tokens":[{"text":"Tech","start":0,"end":4,"id":0},{"text":"Talk","start":5,"end":9,"id":1},{"text":"Podcast","start":10,"end":17,"id":2},{"text":":","start":17,"end":18,"id":3},{"text":"Risking","start":19,"end":26,"id":4},{"text":"Millions","start":27,"end":35,"id":5},{"text":"on","start":36,"end":38,"id":6},{"text":"Startups","start":39,"end":47,"id":7}],"spans":[{"start":0,"end":17,"token_start":0,"token_end":2,"label":"PRODUCT"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[336][0m {"text":"The New Japan Inc.: A senior talks startups","meta":{"source":"The New York Times"},"_input_hash":-1862196313,"_task_hash":1522928758,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"New","start":4,"end":7,"id":1},{"text":"Japan","start":8,"end":13,"id":2},{"text":"Inc.","start":14,"end":18,"id":3},{"text":":","start":18,"end":19,"id":4},{"text":"A","start":20,"end":21,"id":5},{"text":"senior","start":22,"end":28,"id":6},{"text":"talks","start":29,"end":34,"id":7},{"text":"startups","start":35,"end":43,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"ignore"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[337][0m {"text":"Heat-Technology Startup Hyperion Innovates for Dogs","meta":{"source":"The New York Times"},"_input_hash":1493545681,"_task_hash":-1493302900,"tokens":[{"text":"Heat","start":0,"end":4,"id":0},{"text":"-","start":4,"end":5,"id":1},{"text":"Technology","start":5,"end":15,"id":2},{"text":"Startup","start":16,"end":23,"id":3},{"text":"Hyperion","start":24,"end":32,"id":4},{"text":"Innovates","start":33,"end":42,"id":5},{"text":"for","start":43,"end":46,"id":6},{"text":"Dogs","start":47,"end":51,"id":7}],"spans":[{"start":24,"end":32,"token_start":4,"token_end":4,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[338][0m {"text":"Startup Partners with Time Warner for Public Broadband","meta":{"source":"The New York Times"},"_input_hash":1874884265,"_task_hash":323227843,"tokens":[{"text":"Startup","start":0,"end":7,"id":0},{"text":"Partners","start":8,"end":16,"id":1},{"text":"with","start":17,"end":21,"id":2},{"text":"Time","start":22,"end":26,"id":3},{"text":"Warner","start":27,"end":33,"id":4},{"text":"for","start":34,"end":37,"id":5},{"text":"Public","start":38,"end":44,"id":6},{"text":"Broadband","start":45,"end":54,"id":7}],"spans":[{"start":22,"end":33,"token_start":3,"token_end":4,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[339][0m {"text":"Google Said to Buy Videogame Advertising Startup","meta":{"source":"The New York Times"},"_input_hash":1539775513,"_task_hash":35055051,"tokens":[{"text":"Google","start":0,"end":6,"id":0},{"text":"Said","start":7,"end":11,"id":1},{"text":"to","start":12,"end":14,"id":2},{"text":"Buy","start":15,"end":18,"id":3},{"text":"Videogame","start":19,"end":28,"id":4},{"text":"Advertising","start":29,"end":40,"id":5},{"text":"Startup","start":41,"end":48,"id":6}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":6,"text":"Google","label":"ORG","source":"en_newshead_lg/","input_hash":1539775513}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[340][0m {"text":"Search Startup Powerset Raises $12.5 Million","meta":{"source":"The New York Times"},"_input_hash":-1817573272,"_task_hash":-436399866,"tokens":[{"text":"Search","start":0,"end":6,"id":0},{"text":"Startup","start":7,"end":14,"id":1},{"text":"Powerset","start":15,"end":23,"id":2},{"text":"Raises","start":24,"end":30,"id":3},{"text":"$","start":31,"end":32,"id":4},{"text":"12.5","start":32,"end":36,"id":5},{"text":"Million","start":37,"end":44,"id":6}],"spans":[{"start":15,"end":23,"token_start":2,"token_end":2,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[341][0m {"text":"Are Web 2.0 Startups Missing the I.P.O. Party?","meta":{"source":"The New York Times"},"_input_hash":-1094997878,"_task_hash":1593424517,"tokens":[{"text":"Are","start":0,"end":3,"id":0},{"text":"Web","start":4,"end":7,"id":1},{"text":"2.0","start":8,"end":11,"id":2},{"text":"Startups","start":12,"end":20,"id":3},{"text":"Missing","start":21,"end":28,"id":4},{"text":"the","start":29,"end":32,"id":5},{"text":"I.P.O.","start":33,"end":39,"id":6},{"text":"Party","start":40,"end":45,"id":7},{"text":"?","start":45,"end":46,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: True
[35m[47m[342][0m {"text":"Mystery Startup Nabs $6.5 Million in Venture Capital","meta":{"source":"The New York Times"},"_input_hash":-1994056669,"_task_hash":969481144,"tokens":[{"text":"Mystery","start":0,"end":7,"id":0},{"text":"Startup","start":8,"end":15,"id":1},{"text":"Nabs","start":16,"end":20,"id":2},{"text":"$","start":21,"end":22,"id":3},{"text":"6.5","start":22,"end":25,"id":4},{"text":"Million","start":26,"end":33,"id":5},{"text":"in","start":34,"end":36,"id":6},{"text":"Venture","start":37,"end":44,"id":7},{"text":"Capital","start":45,"end":52,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[343][0m {"text":"Where Startup Execs and Investors Go to Tango","meta":{"source":"The New York Times"},"_input_hash":1476086491,"_task_hash":-1032860649,"tokens":[{"text":"Where","start":0,"end":5,"id":0},{"text":"Startup","start":6,"end":13,"id":1},{"text":"Execs","start":14,"end":19,"id":2},{"text":"and","start":20,"end":23,"id":3},{"text":"Investors","start":24,"end":33,"id":4},{"text":"Go","start":34,"end":36,"id":5},{"text":"to","start":37,"end":39,"id":6},{"text":"Tango","start":40,"end":45,"id":7}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[344][0m {"text":"New $120M Fund May Lift Colorado Startups","meta":{"source":"The New York Times"},"_input_hash":498817361,"_task_hash":1422343393,"tokens":[{"text":"New","start":0,"end":3,"id":0},{"text":"$","start":4,"end":5,"id":1},{"text":"120","start":5,"end":8,"id":2},{"text":"M","start":8,"end":9,"id":3},{"text":"Fund","start":10,"end":14,"id":4},{"text":"May","start":15,"end":18,"id":5},{"text":"Lift","start":19,"end":23,"id":6},{"text":"Colorado","start":24,"end":32,"id":7},{"text":"Startups","start":33,"end":41,"id":8}],"spans":[{"start":24,"end":32,"token_start":7,"token_end":7,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[345][0m {"text":"Motorola Gets a Startup, Good Technology, to Challenge BlackBerry","meta":{"source":"The New York Times"},"_input_hash":-1337621491,"_task_hash":2137277349,"tokens":[{"text":"Motorola","start":0,"end":8,"id":0},{"text":"Gets","start":9,"end":13,"id":1},{"text":"a","start":14,"end":15,"id":2},{"text":"Startup","start":16,"end":23,"id":3},{"text":",","start":23,"end":24,"id":4},{"text":"Good","start":25,"end":29,"id":5},{"text":"Technology","start":30,"end":40,"id":6},{"text":",","start":40,"end":41,"id":7},{"text":"to","start":42,"end":44,"id":8},{"text":"Challenge","start":45,"end":54,"id":9},{"text":"BlackBerry","start":55,"end":65,"id":10}],"spans":[{"start":0,"end":8,"token_start":0,"token_end":0,"label":"ORG"},{"start":55,"end":65,"token_start":10,"token_end":10,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[346][0m {"text":"The ABC for Every New Business","meta":{"source":"The New York Times"},"_input_hash":-1515450570,"_task_hash":-440407375,"tokens":[{"text":"The","start":0,"end":3,"id":0},{"text":"ABC","start":4,"end":7,"id":1},{"text":"for","start":8,"end":11,"id":2},{"text":"Every","start":12,"end":17,"id":3},{"text":"New","start":18,"end":21,"id":4},{"text":"Business","start":22,"end":30,"id":5}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[347][0m {"text":"Startup Parsortix Takes a New Angle On Prenatal Diagnostics","meta":{"source":"The New York Times"},"_input_hash":1120250682,"_task_hash":782978520,"tokens":[{"text":"Startup","start":0,"end":7,"id":0},{"text":"Parsortix","start":8,"end":17,"id":1},{"text":"Takes","start":18,"end":23,"id":2},{"text":"a","start":24,"end":25,"id":3},{"text":"New","start":26,"end":29,"id":4},{"text":"Angle","start":30,"end":35,"id":5},{"text":"On","start":36,"end":38,"id":6},{"text":"Prenatal","start":39,"end":47,"id":7},{"text":"Diagnostics","start":48,"end":59,"id":8}],"spans":[{"start":8,"end":17,"token_start":1,"token_end":1,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[348][0m {"text":"Startups Hold More I.P.O.\u2019s, But Fewer Sales","meta":{"source":"The New York Times"},"_input_hash":90641605,"_task_hash":-1629908385,"tokens":[{"text":"Startups","start":0,"end":8,"id":0},{"text":"Hold","start":9,"end":13,"id":1},{"text":"More","start":14,"end":18,"id":2},{"text":"I.P.O.","start":19,"end":25,"id":3},{"text":"\u2019s","start":25,"end":27,"id":4},{"text":",","start":27,"end":28,"id":5},{"text":"But","start":29,"end":32,"id":6},{"text":"Fewer","start":33,"end":38,"id":7},{"text":"Sales","start":39,"end":44,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[349][0m {"text":"Intel Buys Israeli AI Chip Startup Habana for $2B","meta":{"source":"The New York Times"},"_input_hash":-1329564596,"_task_hash":-373880997,"tokens":[{"text":"Intel","start":0,"end":5,"id":0},{"text":"Buys","start":6,"end":10,"id":1},{"text":"Israeli","start":11,"end":18,"id":2},{"text":"AI","start":19,"end":21,"id":3},{"text":"Chip","start":22,"end":26,"id":4},{"text":"Startup","start":27,"end":34,"id":5},{"text":"Habana","start":35,"end":41,"id":6},{"text":"for","start":42,"end":45,"id":7},{"text":"$","start":46,"end":47,"id":8},{"text":"2B","start":47,"end":49,"id":9}],"spans":[{"start":0,"end":5,"token_start":0,"token_end":0,"label":"ORG"},{"start":35,"end":41,"token_start":6,"token_end":6,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[350][0m {"text":"Security Software Startup TriCipher Raises $15 Million","meta":{"source":"The New York Times"},"_input_hash":1607433874,"_task_hash":1957935166,"tokens":[{"text":"Security","start":0,"end":8,"id":0},{"text":"Software","start":9,"end":17,"id":1},{"text":"Startup","start":18,"end":25,"id":2},{"text":"TriCipher","start":26,"end":35,"id":3},{"text":"Raises","start":36,"end":42,"id":4},{"text":"$","start":43,"end":44,"id":5},{"text":"15","start":44,"end":46,"id":6},{"text":"Million","start":47,"end":54,"id":7}],"spans":[{"start":26,"end":35,"token_start":3,"token_end":3,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[351][0m {"text":"Time Warner Backs Ad Optimization Startup AdMeld","meta":{"source":"The New York Times"},"_input_hash":174895701,"_task_hash":-44995277,"tokens":[{"text":"Time","start":0,"end":4,"id":0},{"text":"Warner","start":5,"end":11,"id":1},{"text":"Backs","start":12,"end":17,"id":2},{"text":"Ad","start":18,"end":20,"id":3},{"text":"Optimization","start":21,"end":33,"id":4},{"text":"Startup","start":34,"end":41,"id":5},{"text":"AdMeld","start":42,"end":48,"id":6}],"spans":[{"start":0,"end":11,"token_start":0,"token_end":1,"label":"ORG"},{"start":42,"end":48,"token_start":6,"token_end":6,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[352][0m {"text":"Mobile Payment Startups Face Reluctant Indian Consumers","meta":{"source":"The New York Times"},"_input_hash":-1479516826,"_task_hash":1004568109,"tokens":[{"text":"Mobile","start":0,"end":6,"id":0},{"text":"Payment","start":7,"end":14,"id":1},{"text":"Startups","start":15,"end":23,"id":2},{"text":"Face","start":24,"end":28,"id":3},{"text":"Reluctant","start":29,"end":38,"id":4},{"text":"Indian","start":39,"end":45,"id":5},{"text":"Consumers","start":46,"end":55,"id":6}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[353][0m {"text":"California Solar Startup and German Industrial Giant Forge Partnership","meta":{"source":"The New York Times"},"_input_hash":-488742011,"_task_hash":507824202,"tokens":[{"text":"California","start":0,"end":10,"id":0},{"text":"Solar","start":11,"end":16,"id":1},{"text":"Startup","start":17,"end":24,"id":2},{"text":"and","start":25,"end":28,"id":3},{"text":"German","start":29,"end":35,"id":4},{"text":"Industrial","start":36,"end":46,"id":5},{"text":"Giant","start":47,"end":52,"id":6},{"text":"Forge","start":53,"end":58,"id":7},{"text":"Partnership","start":59,"end":70,"id":8}],"spans":[{"start":0,"end":10,"token_start":0,"token_end":0,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[354][0m {"text":"Venture-Backed Startups Try to Advance Mobile Phones","meta":{"source":"The New York Times"},"_input_hash":-675816459,"_task_hash":-1677477010,"tokens":[{"text":"Venture","start":0,"end":7,"id":0},{"text":"-","start":7,"end":8,"id":1},{"text":"Backed","start":8,"end":14,"id":2},{"text":"Startups","start":15,"end":23,"id":3},{"text":"Try","start":24,"end":27,"id":4},{"text":"to","start":28,"end":30,"id":5},{"text":"Advance","start":31,"end":38,"id":6},{"text":"Mobile","start":39,"end":45,"id":7},{"text":"Phones","start":46,"end":52,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[355][0m {"text":"Apax to stop investing in startups and focus on leveraged buyouts","meta":{"source":"The New York Times"},"_input_hash":-924920365,"_task_hash":433737251,"tokens":[{"text":"Apax","start":0,"end":4,"id":0},{"text":"to","start":5,"end":7,"id":1},{"text":"stop","start":8,"end":12,"id":2},{"text":"investing","start":13,"end":22,"id":3},{"text":"in","start":23,"end":25,"id":4},{"text":"startups","start":26,"end":34,"id":5},{"text":"and","start":35,"end":38,"id":6},{"text":"focus","start":39,"end":44,"id":7},{"text":"on","start":45,"end":47,"id":8},{"text":"leveraged","start":48,"end":57,"id":9},{"text":"buyouts","start":58,"end":65,"id":10}],"spans":[{"start":0,"end":4,"token_start":0,"token_end":0,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[356][0m {"text":"Mutual Funds; Some Options for Startup Investors","meta":{"source":"The New York Times"},"_input_hash":121127324,"_task_hash":1370167771,"tokens":[{"text":"Mutual","start":0,"end":6,"id":0},{"text":"Funds","start":7,"end":12,"id":1},{"text":";","start":12,"end":13,"id":2},{"text":"Some","start":14,"end":18,"id":3},{"text":"Options","start":19,"end":26,"id":4},{"text":"for","start":27,"end":30,"id":5},{"text":"Startup","start":31,"end":38,"id":6},{"text":"Investors","start":39,"end":48,"id":7}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[357][0m {"text":"Google Buys Display-Ad Startup, Escalating Competition with Yahoo","meta":{"source":"The New York Times"},"_input_hash":707322775,"_task_hash":33589761,"tokens":[{"text":"Google","start":0,"end":6,"id":0},{"text":"Buys","start":7,"end":11,"id":1},{"text":"Display","start":12,"end":19,"id":2},{"text":"-","start":19,"end":20,"id":3},{"text":"Ad","start":20,"end":22,"id":4},{"text":"Startup","start":23,"end":30,"id":5},{"text":",","start":30,"end":31,"id":6},{"text":"Escalating","start":32,"end":42,"id":7},{"text":"Competition","start":43,"end":54,"id":8},{"text":"with","start":55,"end":59,"id":9},{"text":"Yahoo","start":60,"end":65,"id":10}],"spans":[{"start":0,"end":6,"token_start":0,"token_end":0,"label":"ORG"},{"start":60,"end":65,"token_start":10,"token_end":10,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[358][0m {"text":"A Debut Novel Skewers Startup Culture, Click by Click","meta":{"source":"The New York Times"},"_input_hash":-1605545704,"_task_hash":525618767,"tokens":[{"text":"A","start":0,"end":1,"id":0},{"text":"Debut","start":2,"end":7,"id":1},{"text":"Novel","start":8,"end":13,"id":2},{"text":"Skewers","start":14,"end":21,"id":3},{"text":"Startup","start":22,"end":29,"id":4},{"text":"Culture","start":30,"end":37,"id":5},{"text":",","start":37,"end":38,"id":6},{"text":"Click","start":39,"end":44,"id":7},{"text":"by","start":45,"end":47,"id":8},{"text":"Click","start":48,"end":53,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[359][0m {"text":"Limited AT&T; service startups cool iPhone frenzy","meta":{"source":"The New York Times"},"_input_hash":-1919409899,"_task_hash":780867466,"tokens":[{"text":"Limited","start":0,"end":7,"id":0},{"text":"AT&T","start":8,"end":12,"id":1},{"text":";","start":12,"end":13,"id":2},{"text":"service","start":14,"end":21,"id":3},{"text":"startups","start":22,"end":30,"id":4},{"text":"cool","start":31,"end":35,"id":5},{"text":"iPhone","start":36,"end":42,"id":6},{"text":"frenzy","start":43,"end":49,"id":7}],"spans":[{"start":8,"end":12,"token_start":1,"token_end":1,"label":"ORG"},{"start":36,"end":42,"token_start":6,"token_end":6,"label":"PRODUCT"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[360][0m {"text":"Startup Journal; Low Odds and High Perils of Logging","meta":{"source":"The New York Times"},"_input_hash":278004208,"_task_hash":-317798654,"tokens":[{"text":"Startup","start":0,"end":7,"id":0},{"text":"Journal","start":8,"end":15,"id":1},{"text":";","start":15,"end":16,"id":2},{"text":"Low","start":17,"end":20,"id":3},{"text":"Odds","start":21,"end":25,"id":4},{"text":"and","start":26,"end":29,"id":5},{"text":"High","start":30,"end":34,"id":6},{"text":"Perils","start":35,"end":41,"id":7},{"text":"of","start":42,"end":44,"id":8},{"text":"Logging","start":45,"end":52,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[361][0m {"text":"Meet the Man Quietly Building the Tesla of Trucks, With Jeff Bezos Aboard","meta":{"source":"The New York Times"},"_input_hash":781802528,"_task_hash":1351261923,"tokens":[{"text":"Meet","start":0,"end":4,"id":0},{"text":"the","start":5,"end":8,"id":1},{"text":"Man","start":9,"end":12,"id":2},{"text":"Quietly","start":13,"end":20,"id":3},{"text":"Building","start":21,"end":29,"id":4},{"text":"the","start":30,"end":33,"id":5},{"text":"Tesla","start":34,"end":39,"id":6},{"text":"of","start":40,"end":42,"id":7},{"text":"Trucks","start":43,"end":49,"id":8},{"text":",","start":49,"end":50,"id":9},{"text":"With","start":51,"end":55,"id":10},{"text":"Jeff","start":56,"end":60,"id":11},{"text":"Bezos","start":61,"end":66,"id":12},{"text":"Aboard","start":67,"end":73,"id":13}],"spans":[{"start":34,"end":39,"token_start":6,"token_end":6,"label":"ORG"},{"start":56,"end":66,"token_start":11,"token_end":12,"label":"PERSON"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[362][0m {"text":"Juggling School With Startups, Harvard MBA\u00b4s Hit the Road","meta":{"source":"The New York Times"},"_input_hash":474885495,"_task_hash":1762432872,"tokens":[{"text":"Juggling","start":0,"end":8,"id":0},{"text":"School","start":9,"end":15,"id":1},{"text":"With","start":16,"end":20,"id":2},{"text":"Startups","start":21,"end":29,"id":3},{"text":",","start":29,"end":30,"id":4},{"text":"Harvard","start":31,"end":38,"id":5},{"text":"MBA\u00b4s","start":39,"end":44,"id":6},{"text":"Hit","start":45,"end":48,"id":7},{"text":"the","start":49,"end":52,"id":8},{"text":"Road","start":53,"end":57,"id":9}],"spans":[{"start":31,"end":38,"token_start":5,"token_end":5,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[363][0m {"text":"Mobile Lifestyle Startups Dial Right Number for Venture Capital","meta":{"source":"The New York Times"},"_input_hash":-142971120,"_task_hash":1938196794,"tokens":[{"text":"Mobile","start":0,"end":6,"id":0},{"text":"Lifestyle","start":7,"end":16,"id":1},{"text":"Startups","start":17,"end":25,"id":2},{"text":"Dial","start":26,"end":30,"id":3},{"text":"Right","start":31,"end":36,"id":4},{"text":"Number","start":37,"end":43,"id":5},{"text":"for","start":44,"end":47,"id":6},{"text":"Venture","start":48,"end":55,"id":7},{"text":"Capital","start":56,"end":63,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[364][0m {"text":"Beyond Silicon Valley:Net Knows No Borders And Startups Abound","meta":{"source":"The New York Times"},"_input_hash":-1131302976,"_task_hash":-2097501973,"tokens":[{"text":"Beyond","start":0,"end":6,"id":0},{"text":"Silicon","start":7,"end":14,"id":1},{"text":"Valley","start":15,"end":21,"id":2},{"text":":","start":21,"end":22,"id":3},{"text":"Net","start":22,"end":25,"id":4},{"text":"Knows","start":26,"end":31,"id":5},{"text":"No","start":32,"end":34,"id":6},{"text":"Borders","start":35,"end":42,"id":7},{"text":"And","start":43,"end":46,"id":8},{"text":"Startups","start":47,"end":55,"id":9},{"text":"Abound","start":56,"end":62,"id":10}],"spans":[{"token_start":1,"token_end":2,"start":7,"end":21,"text":"Silicon Valley","label":"LOCATION","source":"en_newshead_lg/","input_hash":-1131302976}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[365][0m {"text":"Uber Nears Deal for Self-Driving Car Simulation Startup: The Information","meta":{"source":"The New York Times"},"_input_hash":-1154474352,"_task_hash":-1626227653,"tokens":[{"text":"Uber","start":0,"end":4,"id":0},{"text":"Nears","start":5,"end":10,"id":1},{"text":"Deal","start":11,"end":15,"id":2},{"text":"for","start":16,"end":19,"id":3},{"text":"Self","start":20,"end":24,"id":4},{"text":"-","start":24,"end":25,"id":5},{"text":"Driving","start":25,"end":32,"id":6},{"text":"Car","start":33,"end":36,"id":7},{"text":"Simulation","start":37,"end":47,"id":8},{"text":"Startup","start":48,"end":55,"id":9},{"text":":","start":55,"end":56,"id":10},{"text":"The","start":57,"end":60,"id":11},{"text":"Information","start":61,"end":72,"id":12}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":4,"text":"Uber","label":"ORG","source":"en_newshead_lg/","input_hash":-1154474352}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[366][0m {"text":"Shopin Blockchain Startup CEO Pleads Guilty to Fraud: NY Attorney General","meta":{"source":"The New York Times"},"_input_hash":102616712,"_task_hash":-2081808754,"tokens":[{"text":"Shopin","start":0,"end":6,"id":0},{"text":"Blockchain","start":7,"end":17,"id":1},{"text":"Startup","start":18,"end":25,"id":2},{"text":"CEO","start":26,"end":29,"id":3},{"text":"Pleads","start":30,"end":36,"id":4},{"text":"Guilty","start":37,"end":43,"id":5},{"text":"to","start":44,"end":46,"id":6},{"text":"Fraud","start":47,"end":52,"id":7},{"text":":","start":52,"end":53,"id":8},{"text":"NY","start":54,"end":56,"id":9},{"text":"Attorney","start":57,"end":65,"id":10},{"text":"General","start":66,"end":73,"id":11}],"spans":[{"start":0,"end":6,"token_start":0,"token_end":0,"label":"ORG"},{"start":54,"end":56,"token_start":9,"token_end":9,"label":"LOCATION"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[367][0m {"text":"Medical Treatment Startup Gets a little Help from Hedge Funds","meta":{"source":"The New York Times"},"_input_hash":-982896235,"_task_hash":-1446129499,"tokens":[{"text":"Medical","start":0,"end":7,"id":0},{"text":"Treatment","start":8,"end":17,"id":1},{"text":"Startup","start":18,"end":25,"id":2},{"text":"Gets","start":26,"end":30,"id":3},{"text":"a","start":31,"end":32,"id":4},{"text":"little","start":33,"end":39,"id":5},{"text":"Help","start":40,"end":44,"id":6},{"text":"from","start":45,"end":49,"id":7},{"text":"Hedge","start":50,"end":55,"id":8},{"text":"Funds","start":56,"end":61,"id":9}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[368][0m {"text":"Energy Dept. Aide Sees Delay in Reactor Startup","meta":{"source":"The New York Times"},"_input_hash":-12734044,"_task_hash":-360593076,"tokens":[{"text":"Energy","start":0,"end":6,"id":0},{"text":"Dept","start":7,"end":11,"id":1},{"text":".","start":11,"end":12,"id":2},{"text":"Aide","start":13,"end":17,"id":3},{"text":"Sees","start":18,"end":22,"id":4},{"text":"Delay","start":23,"end":28,"id":5},{"text":"in","start":29,"end":31,"id":6},{"text":"Reactor","start":32,"end":39,"id":7},{"text":"Startup","start":40,"end":47,"id":8}],"spans":[],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[369][0m {"text":"Davis to Return to Cosmos' Startup Lineup Tonight; To Play Is the Thing ","meta":{"source":"The New York Times"},"_input_hash":-222712989,"_task_hash":1521550923,"tokens":[{"text":"Davis","start":0,"end":5,"id":0},{"text":"to","start":6,"end":8,"id":1},{"text":"Return","start":9,"end":15,"id":2},{"text":"to","start":16,"end":18,"id":3},{"text":"Cosmos","start":19,"end":25,"id":4},{"text":"'","start":25,"end":26,"id":5},{"text":"Startup","start":27,"end":34,"id":6},{"text":"Lineup","start":35,"end":41,"id":7},{"text":"Tonight","start":42,"end":49,"id":8},{"text":";","start":49,"end":50,"id":9},{"text":"To","start":51,"end":53,"id":10},{"text":"Play","start":54,"end":58,"id":11},{"text":"Is","start":59,"end":61,"id":12},{"text":"the","start":62,"end":65,"id":13},{"text":"Thing","start":66,"end":71,"id":14}],"spans":[{"start":0,"end":8,"token_start":0,"token_end":1,"label":"PERSON"},{"start":19,"end":25,"token_start":4,"token_end":4,"label":"PRODUCT"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[370][0m {"text":"GM Lending $40M to Startup Company Buying Closed Ohio Plant","meta":{"source":"The New York Times"},"_input_hash":-2106628338,"_task_hash":-1912755449,"tokens":[{"text":"GM","start":0,"end":2,"id":0},{"text":"Lending","start":3,"end":10,"id":1},{"text":"$","start":11,"end":12,"id":2},{"text":"40","start":12,"end":14,"id":3},{"text":"M","start":14,"end":15,"id":4},{"text":"to","start":16,"end":18,"id":5},{"text":"Startup","start":19,"end":26,"id":6},{"text":"Company","start":27,"end":34,"id":7},{"text":"Buying","start":35,"end":41,"id":8},{"text":"Closed","start":42,"end":48,"id":9},{"text":"Ohio","start":49,"end":53,"id":10},{"text":"Plant","start":54,"end":59,"id":11}],"spans":[{"token_start":0,"token_end":0,"start":0,"end":2,"text":"GM","label":"ORG","source":"en_newshead_lg/","input_hash":-2106628338},{"token_start":10,"token_end":10,"start":49,"end":53,"text":"Ohio","label":"LOCATION","source":"en_newshead_lg/","input_hash":-2106628338}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[371][0m {"text":"Intel Buys Israeli AI Startup Habana Labs for $2 Billion","meta":{"source":"The New York Times"},"_input_hash":823698411,"_task_hash":2089799396,"tokens":[{"text":"Intel","start":0,"end":5,"id":0},{"text":"Buys","start":6,"end":10,"id":1},{"text":"Israeli","start":11,"end":18,"id":2},{"text":"AI","start":19,"end":21,"id":3},{"text":"Startup","start":22,"end":29,"id":4},{"text":"Habana","start":30,"end":36,"id":5},{"text":"Labs","start":37,"end":41,"id":6},{"text":"for","start":42,"end":45,"id":7},{"text":"$","start":46,"end":47,"id":8},{"text":"2","start":47,"end":48,"id":9},{"text":"Billion","start":49,"end":56,"id":10}],"spans":[{"start":0,"end":5,"token_start":0,"token_end":0,"label":"ORG"},{"start":30,"end":41,"token_start":5,"token_end":6,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: False
[35m[47m[372][0m {"text":"Fintech Startup Qwil Raises $24.4 Million in Equity and $200 Million in Debt","meta":{"source":"The New York Times"},"_input_hash":407514545,"_task_hash":1479531616,"tokens":[{"text":"Fintech","start":0,"end":7,"id":0},{"text":"Startup","start":8,"end":15,"id":1},{"text":"Qwil","start":16,"end":20,"id":2},{"text":"Raises","start":21,"end":27,"id":3},{"text":"$","start":28,"end":29,"id":4},{"text":"24.4","start":29,"end":33,"id":5},{"text":"Million","start":34,"end":41,"id":6},{"text":"in","start":42,"end":44,"id":7},{"text":"Equity","start":45,"end":51,"id":8},{"text":"and","start":52,"end":55,"id":9},{"text":"$","start":56,"end":57,"id":10},{"text":"200","start":57,"end":60,"id":11},{"text":"Million","start":61,"end":68,"id":12},{"text":"in","start":69,"end":71,"id":13},{"text":"Debt","start":72,"end":76,"id":14}],"spans":[{"start":16,"end":20,"token_start":2,"token_end":2,"label":"ORG"}],"_session_id":null,"_view_id":"ner_manual","answer":"accept"}

[30m[41m🐛 [DEBUG][0m Matched: True
[35m[47m[373][0m 

[30m[41m🐛 [DEBUG][0m Matched: False
Traceback (most recent call last):
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 26, in <module>
    train_deep()
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8308706
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2254237
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6119586
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3734472
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2102420
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5742232
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1511856
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8320751
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6767651
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8871088
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3735231
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_595316
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3102866
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1683814
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7029947
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4607493
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5784835
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1463755
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9131770
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2761825
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6211413
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4819362
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2446232
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3520789
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6431151
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6318009
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2836898
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6960483
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1291456
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6006487
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3582445
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3110623
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9317247
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_593712
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9193765
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5198315
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1965896
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6856880
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7400327
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1636466
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1157286
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3906228
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9057845
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9151646
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_642141
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2834325
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6338414
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_742585
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7297812
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7152659
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6186236
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9093519
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8287753
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5441955
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_269451
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6862982
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2301232
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_456821
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3732154
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2635941
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4215471
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_922749
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6042396
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5262426
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7375795
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4402463
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5224496
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8767253
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3528115
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2288216
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6126786
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4648434
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7769919
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4899250
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4865414
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6401218
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3148098
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9511086
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3449292
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3907379
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_740642
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9590555
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8931561
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2045765
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6867993
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6925910
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3232219
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3551447
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6677301
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_575222
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6569956
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3151083
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9658991
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6797585
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6623396
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1758877
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9148946
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4678175
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_830155
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_93993
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_324550
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3943102
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4107369
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8503446
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_504616
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4699644
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8937851
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9561121
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3549504
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8378733
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_188550
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1498740
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7979315
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5389726
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7141141
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2645885
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8007031
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3306325
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2997464
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6459908
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6323266
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5844310
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8743705
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_786806
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9347652
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3312859
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6241638
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9997023
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1520053
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8449350
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_227063
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8752022
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4091695
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3980008
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9233739
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_363985
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9519090
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6710381
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3809191
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1634466
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6953114
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9365103
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6650384
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7016556
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3025939
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4563702
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4561238
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3226452
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4513887
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3216362
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8746882
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5013993
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9252608
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5240702
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6645964
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1027843
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7148988
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7511435
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7912364
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2514175
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3083890
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2223808
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7454430
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_722759
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_979881
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9838816
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3537918
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7915270
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1311541
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5774556
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8346603
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7692453
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5681992
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8113456
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2256744
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1243126
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4025772
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8335579
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3984301
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7235172
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1794891
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1687848
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1123326
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5806783
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1921537
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1732030
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4679324
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9451330
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9441036
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1403583
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6289050
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_891212
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8616158
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8083996
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5277857
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5982679
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8325550
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8240433
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5859548
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6101079
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9799902
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3397029
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4149414
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9826974
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7179875
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9389667
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5033626
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8719961
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6940062
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_698787
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8477236
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5517106
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9068474
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5521644
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_235688
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8074046
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6193439
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4937519
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9004002
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5516204
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4652302
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5560729
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3528177
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1921945
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7733617
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1294070
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1066891
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2517136
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1295062
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4743891
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9544749
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4657998
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6486955
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7651714
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2828625
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7670518
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7373307
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6368479
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3462606
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8603797
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_85458
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8542018
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7684
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2263173
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5691306
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9153441
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_182396
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7095132
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4338299
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8054291
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9267987
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2335841
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7590615
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_989055
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5155071
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4600328
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8324441
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7322837
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6843925
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5383878
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6315295
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9126004
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7159801
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4338556
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_655377
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3475391
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9187172
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_768069
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5984871
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4360977
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3022284
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3376380
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8547471
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2346546
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1189203
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_838458
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8217094
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3406901
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4310304
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8724625
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9417277
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9972428
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_709080
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5819499
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4585296
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8526923
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4488881
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6214399
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1309269
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7785190
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3150173
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_728495
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6300311
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8261258
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7960595
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5005250
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1063451
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8166795
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_264860
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3038334
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3053828
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3140279
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2278967
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6588231
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2576357
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7296709
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8471648
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1109213
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_468526
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5095942
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2545156
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7948363
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5859762
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4111972
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7515597
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_123208
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2439354
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_60178
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5629279
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2432993
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3593022
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5253180
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1371793
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9931649
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4993228
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6003205
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9338602
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6857677
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4924610
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7755717
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8580145
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_811067
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3484716
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8267060
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2141943
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8800330
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_442726
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1883356
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2481057
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9027450
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_817615
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9118108
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5270857
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2261297
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6538275
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_579719
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7490870
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1492453
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4271069
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1830981
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5726194
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5892977
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7941723
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2599314
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9436597
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8006804
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6127745
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3113080
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1300159
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4796235
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8985563
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8629412
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2836387
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9925569
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2636716
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6736190
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7917862
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7794800
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3086374
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2938029
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2225756
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5999757
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1758091
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4020573
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8373222
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1445576
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4321984
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8046205
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7805627
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4700379
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7337881
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2169306
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6730237
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3372324
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1227806
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7267469
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8366251
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7508483
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3239418
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9717392
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4588258
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4840920
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3104815
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5148520
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8705754
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8631734
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4402338
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3481015
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6798500
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8800244
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_427272
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5784538
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6079328
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5538189
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9535551
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_546263
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_97655
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4114780
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6281274
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7608426
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7366992
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2488130
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_761313
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9487218
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5640850
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4450860
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2419578
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3899024
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3733990
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2598256
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3826826
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_255686
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4242602
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8322323
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_137140
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5666555
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3008540
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_7043223
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2450716
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8849055
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6744931
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1395815
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2315133
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_336154
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4739261
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4451340
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8505540
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4748716
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6902139
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6186141
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5485571
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1085136
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_141744
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1159022
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_960660
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6473006
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4670013
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4784379
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1360702
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1304525
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_302325
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1103388
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_844993
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5174876
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4826487
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_346051
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4626344
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3342398
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4719560
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5996840
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3178838
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_982990
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3633729
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8843986
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8922029
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6443720
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4960095
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1570513
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8056
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6917258
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3303206
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4380069
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9727283
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6079228
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_4090477
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6037467
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6462053
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2628990
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1379519
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2803435
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_325623
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6874479
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8198604
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5829793
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_6422307
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8582319
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_963517
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1412824
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_5202102
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_1991934
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8621773
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_9955917
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2500372
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8443520
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_15779
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_3194864
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_2154634
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 23, in train_deep
    context[f'train_{num}']()
  File "train.py", line 3, in train_8227286
  File "/Users/ben/explosion/chrismc/logs/make_log.py", line 15, in train_deep
    num = random.randint(0, 10000000)
  File "/Users/ben/.pyenv/versions/3.9.2/lib/python3.9/random.py", line 339, in randint
    return self.randrange(a, b+1)
  File "/Users/ben/.pyenv/versions/3.9.2/lib/python3.9/random.py", line 301, in randrange
    istart = int(start)
RecursionError: maximum recursion depth exceeded while calling a Python object
`;

<div style={{ height: 500, width: 902 }}>
  <ProdigyLog extraLines={1} text={text} enableActions />
</div>
```

See [`ScrollFollow`](#scrollfollow) for an example of a streaming endpoint.

Log viewing using `text` from a string :

```js
const text = `
Sed ut perspiciatis unde omnis iste natus error sit voluptatem
accusantium doloremque laudantium, totam rem aperiam,
eaque ipsa quae ab illo inventore veritatis et quasi architecto
beatae vitae dicta sunt explicabo. Nemo enim ipsam
voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
quia consequuntur magni dolores eos qui ratione
voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
ipsum quia dolor sit amet, consectetur, adipisci
velit, sed quia non numquam eius modi tempora incidunt ut labore
et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
reprehenderit qui in ea voluptate velit esse quam nihil molestiae
consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
`;

<div style={{ height: 309, width: 902 }}>
  <ProdigyLog extraLines={1} text={text} caseInsensitive />
</div>
```

Log viewing using a websocket

```jsx harmony
const url = 'wss://echo.websocket.org';
let socket = null;

<div>
  <button
    style={{ marginBottom: 8, background: '#eee' }}
    onClick={() => socket && socket.send(JSON.stringify({ message: '[taskcluster 2018-11-14 21:08:32.452Z] Worker Group: us-east-1' }))}>
    ping
  </button>
  <div style={{ height: 200, width: 902 }}>
  <ProdigyLog
    enableActions
    url={url}
    websocket
    websocketOptions={{
      onOpen: (e, sock) => {
          socket = sock; sock.send(JSON.stringify({message: "Socket has been opened!"}))
        },
      formatMessage: e => JSON.parse(e).message,
    }}
  />
  </div>
</div>
```
