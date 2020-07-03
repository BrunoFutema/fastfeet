import React, { useEffect, useState, useRef } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import Table from '~/components/Table';
import BalloonActions, {
  EditLink,
  DeleteLink,
} from '~/components/BalloonActions';

import api from '~/services/api';

import { Tr, Avatar, Span } from './styles';

export default function DeliveryMans() {
  const [deliveryMans, setDeliveryMans] = useState([]);
  const spansRef = useRef([]);

  useEffect(() => {
    async function loadDeliveryMans() {
      const response = await api.get('deliverymans');

      spansRef.current = new Array(response.data);

      setDeliveryMans(response.data);
    }

    loadDeliveryMans();
  }, []);

  function handleToggleVisible(index) {
    const { span: currentSpan } = spansRef.current[index];

    if (currentSpan.classList.contains('active')) {
      currentSpan.classList.remove('active');
    } else {
      currentSpan.classList.add('active');
    }
  }

  return (
    <Table
      title="Gerenciando entregadores"
      searchPlaceholder="entregadores"
      buttonColor="var(--primary-color)"
      buttonText="Cadastrar"
      buttonFontSize={12}
      buttonFontColor="#fff"
      buttonType="link"
      linkUrl="/save/deliveryman"
      backButton
      backButtonText="Voltar"
      actions
    >
      <>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveryMans.map((deliveryMan, index) => (
            <Tr key={deliveryMan.id}>
              <td>#{deliveryMan.idStr}</td>
              <td>
                <Avatar color="#A28FD0">{deliveryMan.initialLetters}</Avatar>
              </td>
              <td>{deliveryMan.name}</td>
              <td>{deliveryMan.email}</td>
              <td>
                <Span
                  ref={(span) => (spansRef.current[index] = { span })}
                  onMouseEnter={() => handleToggleVisible(index)}
                  onMouseLeave={() => handleToggleVisible(index)}
                >
                  <FiMoreHorizontal size={16} color="#999999" />
                  <BalloonActions>
                    <EditLink link={`/save/deliveryman/${deliveryMan.id}`} />
                    <DeleteLink id={deliveryMan.id} />
                  </BalloonActions>
                </Span>
              </td>
            </Tr>
          ))}
        </tbody>
      </>
    </Table>
  );
}
