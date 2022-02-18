import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property";

const Banner = ({
  purpose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10" bg="gray.300" borderRadius="15px">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1} <br /> {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3px" paddingBottom="3px" color="gray.700">
        {desc1} <br />
        {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertyForSale, propertyForRent }) {
  // console.log(propertyForSale, propertyForRent);
  return (
    <Box>
      <Banner
        purpose="Acheter une maison"
        title1="Trouver, Acheter & posseder votre"
        title2="maison de rêve"
        desc1="Explorer les appartements, villas et maisons"
        desc2="et plus"
        buttonText="explorer l'achat"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertyForRent &&
          propertyForRent.map((property) => (
            <Property property={property} key={property.id} />
          ))}
      </Flex>
      <Banner
        purpose="Maison à louer"
        title1="Maisons de location "
        title2="pour tous"
        desc1="Explorer les appartements, villas et maisons"
        desc2="et plus"
        buttonText="Explorer la location"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap">
        {propertyForSale &&
          propertyForSale.map((property) => (
            <Property property={property} key={property.id} />
          ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}
