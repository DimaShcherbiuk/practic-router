import {
  Container,
  CountryInfo,
  GoBackBtn,
  Heading,
  Loader,
  Section,
} from "components";
import { useFetchCountry } from "hooks";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Country = () => {
  const location = useLocation();
  console.log(location);

  const { country, isLoading, error } = useFetchCountry();

  const goBack = useRef(location?.state ?? "/");
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading title="Something went wronge..." bottom />}
        <GoBackBtn path={goBack.current}>Go back</GoBackBtn>
        {country && <CountryInfo {...country} />}
      </Container>
    </Section>
  );
};
export default Country;
