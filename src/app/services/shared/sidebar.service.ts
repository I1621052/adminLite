import { Injectable } from '@angular/core';

@Injectable()

export class SidebarService {
  menu1: any = [
    {
      titulo: 'Usuario',
      icono: 'fa fa-user',
      submenu: [
        { titulo: 'Perfil', url: '/perfil', icono: 'fa fa-user' },
        { titulo: 'Habitaciones', url: '/habitaciones', icono: 'fa fa-bed' },
        { titulo: 'Reservas', url: '/reserva', icono: 'fa fa-calendar' }
      ]
    }
  ]
  menu2: any = [
    {
      titulo: 'Administrador',
      icono: 'fa fa-gears',
      submenu: [
        { titulo: 'Usuarios', url: '/usuario', icono: 'fa fa-user' },
        { titulo: 'Categorias', url: '/categoria', icono: 'fa fa-th-list' },
        { titulo: 'Habitacion', url: '/habitacion', icono: 'fa fa-bed' },
        { titulo: 'Servicios', url: '/habitacion', icono: 'fa fa-share-alt' },
        { titulo: 'Reservas', url: '/reserva', icono: 'fa fa-calendar' }
      ]
    }
  ]
  constructor() { }
}