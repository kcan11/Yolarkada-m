class UIManager {
    constructor() {
        this.toastContainer = null;
    }

    init() {
        // Create Toast Container
        this.toastContainer = document.createElement('div');
        this.toastContainer.id = 'toast-container';
        document.body.appendChild(this.toastContainer);
    }

    showToast(message, type = 'info', icon = 'fas fa-info-circle') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let headerColor = type === 'success' ? '#22c55e' : (type === 'warning' ? '#eab308' : 'var(--primary)');
        if(type === 'badge') headerColor = '#eab308';

        toast.innerHTML = `
            <div class="toast-icon" style="color: ${headerColor}"><i class="${icon}"></i></div>
            <div class="toast-content">${message}</div>
            <button class="toast-close">&times;</button>
        `;

        this.toastContainer.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 10);

        const closeBtn = toast.querySelector('.toast-close');
        
        const removeToast = () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        };
        
        closeBtn.addEventListener('click', removeToast);
        // Auto remove after 5s
        setTimeout(removeToast, 5000);
    }

    renderEmptyState(container, message, iconStr = 'fas fa-ghost') {
        container.innerHTML = `
            <div class="empty-state">
                <i class="${iconStr}"></i>
                <p>${message}</p>
            </div>
        `;
    }

    toggleModal(modalId, forceState = null) {
        const modal = document.getElementById(modalId);
        if(!modal) return;
        
        if(forceState === true || (!modal.classList.contains('show') && forceState === null)) {
            modal.classList.add('show');
        } else {
            modal.classList.remove('show');
        }
    }
}

const UI = new UIManager();
