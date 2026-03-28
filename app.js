function ciscoGuide() {
    return {
        searchQuery: '',
        showToast: false,
        toastTimeout: null,

        showCommands: [
            { command: 'show vlan brief', desc: 'Visualizza lo stato delle VLAN e le porte associate.' },
            { command: 'show ip interface brief', desc: 'Sintesi stato interfacce IP (IP, Status, Protocol).' },
            { command: 'show int trunk', desc: 'Elenca interfacce in Trunk e VLAN permesse.' },
            { command: 'show run', desc: 'Mostra la configurazione corrente in RAM.' },
            { command: 'show ip route', desc: 'Visualizza la tabella di routing Layer 3.' },
            { command: 'show ip dhcp pool', desc: 'Verifica l\'utilizzo dei pool DHCP.' },
            { command: 'show arp', desc: 'Address resolution (ARP management).' },
        ],

        baseCommands: [
            { cmd: 'enable', desc: 'Accesso alla modalità privilegiata.' },
            { cmd: 'conf t', desc: 'Accesso alla modalità di configurazione globale.' },
            { cmd: 'interface [ID-interfaccia]', desc: 'Entrare nella configurazione dell\'interfaccia.' },
            { cmd: 'exit', desc: 'Uscire dalla modalità di configurazione corrente.' },
            { cmd: 'end', desc: 'Uscire dalla modalità di configurazione.' },
            { cmd: 'wr', desc: 'Salvare la configurazione.' },
        ],

        get filteredShowCommands() {
            if (this.searchQuery === '') return this.showCommands;
            return this.showCommands.filter(item =>
                item.command.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                item.desc.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },

        get filteredBaseCommands() {
            if (this.searchQuery === '') return this.baseCommands;
            return this.baseCommands.filter(item =>
                item.cmd.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                item.desc.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },

        copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                this.showToast = true;
                clearTimeout(this.toastTimeout);
                this.toastTimeout = setTimeout(() => {
                    this.showToast = false;
                }, 2500);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    }
}
