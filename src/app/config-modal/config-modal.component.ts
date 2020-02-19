import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NuclearcraftConfig } from '../model/config';
import { DataService } from '../data.service';

@Component({
  selector: 'app-config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.scss']
})
export class ConfigModalComponent implements OnInit {

  public config: NuclearcraftConfig;

  constructor(public activeModal: NgbActiveModal, public data: DataService) {
    data.getConfig().subscribe(config => this.config = config);
  }

  ngOnInit(): void {
  }

  fileChanged(event: any): void {
    this.data.loadFile(event.target.files[0]);
  }
}
