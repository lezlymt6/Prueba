import { Component, OnInit } from '@angular/core';
import { UserService, Usuario } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  usuarios: Usuario[] = [];
  nuevoUsuario: Usuario = { nombre: '', correo: '', edad: 0 };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.userService.getUsuarios().subscribe(data => this.usuarios = data);
  }

  agregarUsuario() {
    this.userService.addUsuario(this.nuevoUsuario).subscribe(() => {
      this.obtenerUsuarios();
      this.nuevoUsuario = { nombre: '', correo: '', edad: 0 };
    });
  }

  actualizarUsuario(usuario: Usuario) {
    if (usuario.id) {
      this.userService.updateUsuario(usuario.id, usuario).subscribe(() => this.obtenerUsuarios());
    }
  }

  eliminarUsuario(id?: number) {
    if (id) {
      this.userService.deleteUsuario(id).subscribe(() => this.obtenerUsuarios());
    }
  }
}
