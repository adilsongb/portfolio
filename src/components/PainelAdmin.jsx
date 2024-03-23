import { useState } from 'react';
import { AdminPainel, TabNav } from '../styles/Admin';
import { AiFillEdit } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { CloseButton } from '../styles/Buttons';
import { getAdminPage } from '../routes';

function PaineAdmin() {
  const [showPainel, setShowPainel] = useState(false);
  const [tabName, setTabName] = useState('geral');

  return (
    <AdminPainel
      $showPainel={showPainel}
      onClick={() => !showPainel && setShowPainel(true)}
    >
      <AiFillEdit />

      {!!showPainel && (
        <section>
          <CloseButton onClick={() => setShowPainel(false)}>
            <IoMdClose className="closeButton" />
          </CloseButton>

          <div className="tabs">
            <TabNav
              className="tab"
              onClick={() => setTabName('geral')}
              $selected={tabName === 'geral'}
            >
              Geral
            </TabNav>
            <TabNav
              className="tab"
              onClick={() => setTabName('sobre')}
              $selected={tabName === 'sobre'}
            >
              Sobre
            </TabNav>
            <TabNav
              className="tab"
              onClick={() => setTabName('projetos')}
              $selected={tabName === 'projetos'}
            >
              Projetos
            </TabNav>
          </div>

          {getAdminPage(tabName)}
        </section>
      )}
    </AdminPainel>
  );
}

export default PaineAdmin;
