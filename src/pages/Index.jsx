import { Container, Box, Heading, Text, VStack, HStack, IconButton, Image, Stack, Divider } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" bg="teal.500" color="white" py={4} px={8} mb={8}>
        <HStack justifyContent="space-between">
          <Heading as="h1" size="lg">
            My Company
          </Heading>
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </HStack>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box as="section" textAlign="center" mb={8}>
        <VStack spacing={4}>
          <Heading as="h2" size="2xl">
            Welcome to My Company
          </Heading>
          <Text fontSize="xl">We provide the best services to help your business grow.</Text>
          <Image src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aHxlbnwwfHx8fDE3MTczNzEzMjl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Business Growth" borderRadius="md" />
        </VStack>
      </Box>

      {/* About Section */}
      <Box as="section" mb={8}>
        <VStack spacing={4} textAlign="center">
          <Heading as="h3" size="lg">
            About Us
          </Heading>
          <Text fontSize="md">My Company has been a leader in the industry for over 20 years. Our mission is to provide top-notch services to our clients and help them achieve their business goals.</Text>
          <Image src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwdGVhbXxlbnwwfHx8fDE3MTczNzEzMzB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Company Team" borderRadius="md" />
        </VStack>
      </Box>

      {/* Services Section */}
      <Box as="section" mb={8}>
        <VStack spacing={4} textAlign="center">
          <Heading as="h3" size="lg">
            Our Services
          </Heading>
          <Stack direction={["column", "row"]} spacing={8} justify="center">
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h4" size="md">
                Service 1
              </Heading>
              <Text>We offer exceptional service 1 to meet your needs.</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h4" size="md">
                Service 2
              </Heading>
              <Text>Our service 2 is designed to help you succeed.</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h4" size="md">
                Service 3
              </Heading>
              <Text>Experience the best with our service 3.</Text>
            </Box>
          </Stack>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" py={4} px={8} mt={8}>
        <VStack spacing={2} textAlign="center">
          <Text>&copy; {new Date().getFullYear()} My Company. All rights reserved.</Text>
          <Divider borderColor="whiteAlpha.500" />
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
