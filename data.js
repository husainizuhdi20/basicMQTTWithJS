    // Konfigurasi MQTT
    const mqttServer = 'mqtt://broker.example.com'; // Ganti dengan URL server MQTT yang sesuai
    const mqttTopic = 'topik_example'; // Ganti dengan topik MQTT yang ingin Anda subscribe

    // Buat koneksi MQTT
    const client = mqtt.connect(mqttServer);

    // Ketika ada pesan MQTT masuk
    client.on('message', (topic, message) => {
        console.log(`Menerima pesan di topik ${topic}: ${message.toString()}`);

        // Tambahkan pesan ke elemen HTML
        const mqttData = document.getElementById('mqtt-data');
        mqttData.innerHTML += `<p>Menerima pesan di topik ${topic}: ${message.toString()}</p>`;
    });

    // Subscribe ke topik MQTT
    client.on('connect', () => {
        client.subscribe(mqttTopic);
        console.log(`Berlangganan ke topik ${mqttTopic}`);
    });

   