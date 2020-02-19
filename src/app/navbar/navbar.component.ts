import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigModalComponent } from '../config-modal/config-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  adsEnabled = true;

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  openSettingsModal(): void {
    const modal = this.modal.open(ConfigModalComponent, { size: 'xl' });
  }
}
