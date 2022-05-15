class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer class="sticky-footer bg-white">
        <div class="container my-auto">
            <div class="copyright text-center my-auto">
                <span>Copyright &copy; Stocks Manager 2021</span>
            </div>
        </div>      
    </footer>`;
    }
}

customElements.define('my-footer', MyFooter);
alert(1)