Ext.define('MyApp.view.Contact', {
    extend: 'Ext.Panel',
    xtype: 'contact',
    requires: [

    ],
    config: {

        items: [{
            xtype: 'toolbar',
            title: 'Hello!'
        }, {
            xtype: 'panel',
            layout: {
                type: 'vbox',
                align: 'middle'
            },
            items: [{
                xtype: 'panel',
                items: [{
                    xtype: 'panel',
                    html: 'HELLO 2'
                }, {
                    xtype: 'button',
                    text: 'I am a button',
                    ui: 'decline',
                    name: 'mybutton'
                }]
            }]
        }]
    }

});