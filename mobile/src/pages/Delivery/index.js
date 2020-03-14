import React from 'react';
import { View } from 'react-native';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
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

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export default function Delivery({ navigation, route }) {
  const { delivery } = route.params;

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
            <Text>{delivery.recipient.name}</Text>
            <Label>ENDEREÇO DE ENTREGA</Label>
            <Text>
              {delivery.recipient.street}
              {delivery.recipient.number && `, ${delivery.recipient.number}`}
              {delivery.recipient.complement &&
                ` - ${delivery.recipient.complement}`}
              {`, ${delivery.recipient.city} - ${delivery.recipient.state}, ${delivery.recipient.zipcode}`}
            </Text>
            <Label>PRODUTO</Label>
            <Text>{delivery.product}</Text>
          </Box>

          <Box>
            <Header>
              <Icon name="event" size={20} color={colors.primary} />
              <Title>Situação da entrega</Title>
            </Header>
            <Label>STATUS</Label>
            <Text>{delivery.status}</Text>
            <Row>
              <View>
                <Label>DATA DE RETIRADA</Label>
                <Text>
                  {delivery.start_date &&
                    format(
                      utcToZonedTime(parseISO(delivery.start_date), timezone),
                      'dd/MM/yyyy'
                    )}
                </Text>
              </View>
              <View>
                <Label>DATA DE ENTREGA</Label>
                <Text>
                  {delivery.end_date &&
                    format(
                      utcToZonedTime(parseISO(delivery.end_date), timezone),
                      'dd/MM/yyyy'
                    )}
                </Text>
              </View>
            </Row>
          </Box>

          <Toolbar>
            <Button>
              <Icon name="highlight-off" size={20} color="#E74040" />
              <ButtonText onPress={() => navigation.navigate('NewProblem')}>
                Informar problema
              </ButtonText>
            </Button>
            <Button>
              <Icon name="info-outline" size={20} color="#E7BA40" />
              <ButtonText
                onPress={() =>
                  navigation.navigate('Problems', { deliveryId: delivery.id })
                }
              >
                Visualizar problemas
              </ButtonText>
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
