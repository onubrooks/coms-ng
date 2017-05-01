import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'latest-component',
    templateUrl: 'latest.component.html',
    styleUrls: ['latest.component.css']
})
export class LatestComponent {
 items: any[] = [
      {
        title: "1", footer: "10", headerText: "First", footerText: "4",
        items: [
          { image: "~/images/a9ff17db85f8136619feb0d5a200c0e4.png", text: "Stop" },
          { text: "Drop", image: "http://static.srcdn.com/wp-content/uploads/Superman-fighting-Goku.jpg" }
        ]
      }
    ]
}
