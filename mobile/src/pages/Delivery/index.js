import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
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
  ToolbarButton,
  ToolbarButtonText,
  ButtonStart,
} from './styles';

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export default function Delivery() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { delivery } = route.params;

  async function handleDeliveryStart() {
    try {
      setLoading(true);
      await api.post(`deliveries/${delivery.id}/start`, {
        date: Date.now(),
      });
      setLoading(false);
      navigation.navigate('Dashboard');
    } catch (e) {
      Alert.alert('Falha', 'Falha ao iniciar entrega');
    } finally {
      setLoading(false);
    }
  }

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
                  {delivery.start_date
                    ? format(
                        utcToZonedTime(parseISO(delivery.start_date), timezone),
                        'dd/MM/yyyy'
                      )
                    : '--/--/--'}
                </Text>
              </View>
              <View>
                <Label>DATA DE ENTREGA</Label>
                <Text>
                  {delivery.end_date
                    ? format(
                        utcToZonedTime(parseISO(delivery.end_date), timezone),
                        'dd/MM/yyyy'
                      )
                    : '--/--/--'}
                </Text>
              </View>
            </Row>
          </Box>

          {delivery.status === 'PENDENTE' ? (
            <ButtonStart onPress={handleDeliveryStart} loading={loading}>
              RETIRAR PRODUTO
            </ButtonStart>
          ) : (
            delivery.status !== 'ENTREGUE' && (
              <Toolbar>
                <ToolbarButton
                  onPress={() =>
                    navigation.navigate('NewProblem', {
                      deliveryId: delivery.id,
                    })
                  }
                >
                  <Icon name="highlight-off" size={20} color="#E74040" />
                  <ToolbarButtonText>Informar problema</ToolbarButtonText>
                </ToolbarButton>
                <ToolbarButton
                  onPress={() =>
                    navigation.navigate('Problems', { deliveryId: delivery.id })
                  }
                >
                  <Icon name="info-outline" size={20} color="#E7BA40" />
                  <ToolbarButtonText>Visualizar problemas</ToolbarButtonText>
                </ToolbarButton>
                <ToolbarButton
                  onPress={() =>
                    navigation.navigate('DeliveryEnd', {
                      deliveryId: delivery.id,
                    })
                  }
                >
                  <Icon name="check-circle" size={20} color={colors.primary} />
                  <ToolbarButtonText>Confirmar entrega</ToolbarButtonText>
                </ToolbarButton>
              </Toolbar>
            )
          )}
        </ScrollView>
      </Container>
      {/* </Wrapper> */}
    </>
  );
}
