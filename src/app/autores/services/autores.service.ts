import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private apiAutores: string='https://poetrydb.org/author';
  private servicioUrl: string='https://poetrydb.org/author'
  constructor() { }
}
