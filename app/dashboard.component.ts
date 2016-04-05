/**
 * Created by juandavidcatano on 5/04/16.
 */
import { Component, OnInit } from 'angular2/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls:['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private _heroService: HeroService) { }
    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0,4));
    }
    gotoDetail(){ /* not implemented yet */}
}
