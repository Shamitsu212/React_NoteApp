export function createEmptyNote(selected: string) {

  return {
    id: Date.now(),

    project_id: selected !== 'All' && selected !== 'favorite' ? Number(selected) : 0,

    name: 'Новая заметка',
    text: '',

    Pinned: false,
    Favorite: false,
  }
}