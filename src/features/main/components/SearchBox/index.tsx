import { ChangeEvent } from 'react';

import { useNotesContext } from '@/utils/hooks/useNotesContext';
import { Input, SearchBoxWrapper, SearchIcon } from './styles';

const SearchBox = () => {
  const { notes, search, setSearch, currentNote, setCurrentNote } =
    useNotesContext();

  const handleOnFocus = () => currentNote && setCurrentNote(null);

  return (
    <SearchBoxWrapper>
      <Input
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        onFocus={handleOnFocus}
        disabled={!notes}
        type="text"
        placeholder="Search by title, description"
      />
      <SearchIcon />
    </SearchBoxWrapper>
  );
};

export default SearchBox;
