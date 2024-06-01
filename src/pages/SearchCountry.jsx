import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from "components";
import { useFetchByRegion } from "hooks/useFetchByRegion";

const SearchCountry = () => {
  const { countries, isLoading, error, onHandleSubmit } = useFetchByRegion();

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHandleSubmit} />
        {isLoading && <Loader />}
        {error && <Heading title="Something went wronge..." bottom />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
