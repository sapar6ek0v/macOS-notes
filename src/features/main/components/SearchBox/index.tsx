import { Input, SearchBoxWrapper, SearchIcon } from './styles';

const SearchBox = () => {
  return (
    <SearchBoxWrapper>
      <Input type="text" placeholder="Search" />
      <SearchIcon />
    </SearchBoxWrapper>
  );
};

export default SearchBox;
