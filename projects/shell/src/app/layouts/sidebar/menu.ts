import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 2,
    label: 'Dashboards',
    icon: 'ri-dashboard-2-line',
    subItems: [
      {
        id: 3,
        label: 'Dashboard Rmpm',
        link: '/analytics',
        parentId: 2
      },
      {
        id: 4,
        label: 'Dashboard B3',
        link: '/crm',
        parentId: 2
      },
      {
        id: 5,
        label: 'Dashboard Paldrum',
        link: '',
        parentId: 2
      },
    ]
  },
  {
    id: 8,
    label: 'Rmpm',
    icon: 'ri-apps-2-line',
    subItems: [
      {
        id: 9,
        label: 'Kedatangan',
        link: '/calendar',
        parentId: 8
      },
      {
        id: 10,
        label: 'Pengiriman',
        link: '/chat',
        parentId: 8
      },
    ]
  },
  {
    id: 11,
    label: 'B3',
    icon: 'ri-apps-2-line',
    subItems: [
      {
        id: 12,
        label: 'Kedatangan',
        link: '/calendar',
        parentId: 11
      },
      {
        id: 13,
        label: 'Good Issue',
        link: '/chat',
        parentId: 11
      },
    ]
  },
  {
    id: 14,
    label: 'TEST MFE1',
    icon: 'ri-apps-2-line',
    link: '/pallet-drum'
  },
  {
    id: 55,
    label: 'Master Data',
    icon: 'ri-account-circle-line',
    subItems: [
      {
        id: 56,
        label: 'User',
        link: '',
        parentId: 49,
      },
      {
        id: 59,
        label: 'Rmpm',
        parentId: 49,
        subItems: [
          {
            id: 60,
            label: 'Material',
            link: '',
            parentId: 59
          },
          {
            id: 61,
            label: 'Tipe Armada',
            link: '',
            parentId: 59
          },
          {
            id: 62,
            label: 'Kondisi Armada',
            link: '/rmpm/fleet-condition',
            parentId: 59
          },
          {
            id: 63,
            label: 'Tujuan Pengiriman',
            link: '/rmpm/delivery-destination',
            parentId: 59
          },
          {
            id: 64,
            label: 'Abnormal',
            link: '/rmpm/abnormal',
            parentId: 59
          },
          {
            id: 65,
            label: 'Keperluan',
            link: '/rmpm/necessity',
            parentId: 59
          },
        ]
      },
    ]
  },
];
