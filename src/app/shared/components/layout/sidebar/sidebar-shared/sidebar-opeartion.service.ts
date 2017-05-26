import { Injectable } from '@angular/core';

@Injectable()
export class SidebarOpeartionService {

    constructor() { }
    getSidebarItem() {
        return [
            { text: 'Dashboard', link: '/dashboard', iconUrl: 'assets/images/icons/dashboard.png' },
            { text: 'Admins', link: '/admin', iconUrl: 'assets/images/icons/person.svg' },
            { text: 'Company', link: '/company', iconUrl: 'assets/images/icons/company.png' }
        ];
    }
}
