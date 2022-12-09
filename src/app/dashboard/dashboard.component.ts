import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  
  title = '';
  type = 'OrgChart';
  data = [
     [{v:'Mike', f:'Mike<div style="color:red; font-style:italic">President</div>'},
        '', 'The President'],
     [{v:'Jim', f:'Jim<div style="color:red; font-style:italic">Vice President</div>'},
        'Mike', 'VP'],
     ['Alice', 'Mike', ''],
     ['Bob', 'Jim', 'Bob Sponge'],
     ['Carol', 'Bob', '']
  ];
  columnNames = ["Name","Manager","Tooltip"];
  options = {   
     allowHtml: true
  };
  width = 550;
  height = 400;

}
