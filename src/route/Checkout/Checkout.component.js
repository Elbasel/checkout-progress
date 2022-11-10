import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'SourceComponent/ContentWrapper';


import './Checkout.override.style';

export class Checkout extends SourceCheckout {
    // TODO implement logic


    renderCheckoutProgress() {
        return (
            <div>Checkout Progress</div>
        )
    }


    // Override render method to add CheckoutProgress component
    render() {
        return (
            <main block="Checkout">
                {this.renderCheckoutProgress()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
};

export default Checkout