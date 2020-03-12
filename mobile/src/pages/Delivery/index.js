import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';
import {
  Container,
  BackgroundHeader,
  Wrapper,
  ScrollView,
  Box,
  Header,
  Title,
  Label,
  Text,
  Row,
  Toolbar,
  Button,
  ButtonText,
} from './styles';

export default function Delivery({ navigation }) {
  return (
    <>
      {/* <BackgroundHeader />
      <Wrapper> */}
      <Container>
        <ScrollView>
          <Box>
            <Header>
              <Icon name="local-shipping" size={20} color={colors.primary} />
              <Title>Informações da entrega</Title>
            </Header>
            <Label>DESTINATÁRIO</Label>
            <Text>Ludwig van Beethoven</Text>
            <Label>ENDEREÇO DE ENTREGA</Label>
            <Text>Rua Beethowen, 1729, Diadema - SP, 09960-558</Text>
            <Label>PRODUTO</Label>
            <Text>Yamaha x7</Text>
          </Box>

          <Box>
            <Header>
              <Icon name="event" size={20} color={colors.primary} />
              <Title>Situação da entrega</Title>
            </Header>
            <Label>STATUS</Label>
            <Text>Pendente</Text>
            <Row>
              <View>
                <Label>DATA DE RETIRADA</Label>
                <Text>14/01/2020</Text>
              </View>
              <View>
                <Label>DATA DE ENTREGA</Label>
                <Text>--/--/--</Text>
              </View>
            </Row>
          </Box>

          <Toolbar>
            <Button>
              <Icon name="highlight-off" size={20} color="#E74040" />
              <ButtonText>Informar problema</ButtonText>
            </Button>
            <Button>
              <Icon name="info-outline" size={20} color="#E7BA40" />
              <ButtonText>Visualizar problemas</ButtonText>
            </Button>
            <Button>
              <Icon name="check-circle" size={20} color={colors.primary} />
              <ButtonText onPress={() => navigation.navigate('DeliveryEnd')}>
                Confirmar entrega
              </ButtonText>
            </Button>
          </Toolbar>
        </ScrollView>
      </Container>
      {/* </Wrapper> */}
    </>
  );
}
