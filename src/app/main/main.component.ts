import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import gql from "graphql-tag";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {

  constructor(private apollo: Apollo) {    
  }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          query msps {
            name              
          }          
        `
      })
      .valueChanges.subscribe(
        (data: any) => {
          debugger;
          console.log("data", data);
        },
        err => {
          debugger;
          console.log("err", err);
        },
        () => {
          console.log("done");
        }
      );
  }
}
