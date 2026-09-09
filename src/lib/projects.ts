export function badgeClass(status: string): string {
  switch (status) {
    case 'available':
      return 'badge badge--available';
    case 'construction':
      return 'badge badge--construction';
    case 'completed':
    case 'sold':
      return 'badge badge--sold';
    case 'land':
      return 'badge badge--land';
    default:
      return 'badge';
  }
}

export function projectHref(id: string): string {
  return `/projects/${id}`;
}
