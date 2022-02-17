import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer } from './styles'

interface INewTransactionModalProps{
  isOpen:boolean,
  onRequestClose: () => void
}
export function NewTransactionModal({isOpen, onRequestClose}:INewTransactionModalProps){
  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose = {onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" 
        onClick={onRequestClose}
        className="react-close-modal"
      >
        <img src={closeImg} alt="Fechar nodal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </button>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
        
    </Modal>
  )
}