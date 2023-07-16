import Loader from '@/components/Loader';
import { useNotesContext } from '@/utils/hooks/useNotesContext';
import Item from './Item';
import { ListItemWrapper, NotFoundTitle } from './styles';

const ListItem = () => {
  const { notes } = useNotesContext();

  const result =
    notes && notes.length ? (
      notes.map((note) => <Item key={note.id} note={note} />)
    ) : (
      <NotFoundTitle>Nothing found for your request!</NotFoundTitle>
    );

  return (
    <ListItemWrapper>
      {notes ? result : <Loader size={2} centered />}
    </ListItemWrapper>
  );
};

export default ListItem;
