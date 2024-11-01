import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import GaugeChart from 'react-gauge-chart';

const BmiCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [bmiLabel, setBmiLabel] = useState('');
    const [bmiColor, setBmiColor] = useState('');

    const calculateBmi = () => {
        if (weight && height) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(parseFloat(bmiValue));
            const label = getBmiLabel(bmiValue);
            setBmiLabel(label.label);
            setBmiColor(label.color);
        }
    };

    const getBmiLabel = (bmi) => {
        if (bmi < 18.5) return { label: 'Underweight', color: '#00C9A7' }; // Vert
        if (bmi >= 18.5 && bmi < 25) return { label: 'Good Health', color: '#00C9A7' }; // Vert
        if (bmi >= 25 && bmi < 30) return { label: 'Overweight', color: '#FFC371' }; // Jaune
        return { label: 'Obese', color: '#FF5F6D' }; // Rouge
    };

    const getGaugePercent = (bmi) => {
        if (bmi < 18.5) return 0.0; // Tout à gauche (vert)
        if (bmi < 25) return (bmi - 18.5) / (25 - 18.5) * 0.5; // Entre 18.5 et 25
        if (bmi < 30) return 0.5 + (bmi - 25) / (30 - 25) * 0.5; // Entre 25 et 30
        return 1.0; // Tout à droite (rouge)
    };

    return (
        <Container component={Paper} style={{ padding: '50px', marginTop: '5%', width: '100%', maxWidth: '500px', textAlign: 'center' }}>
            <TextField
                label="Weight (kg)"
                variant="outlined"
                fullWidth
                margin="normal"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <TextField
                label="Height (cm)"
                variant="outlined"
                fullWidth
                margin="normal"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            <Button
                variant="contained"
                style={{ marginTop: '20px', backgroundColor: '#089eae', color: 'white', width: '100%' }}
                onClick={calculateBmi}
            >
                Calculate
            </Button>
            {bmi !== null && (
                <>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <GaugeChart
                            id="bmi-gauge"
                            nrOfLevels={3}
                            colors={['#00C9A7', '#FFC371', '#FF5F6D']}
                            percent={getGaugePercent(bmi)}
                            arcWidth={0.3}
                            textColor="#000"
                            formatTextValue={() => ``}
                            needleColor="#555"
                            needleBaseColor="#555"
                            style={{ width: 200 }}
                        />
                    </div>
                    <Typography variant="h6" style={{ marginTop: '10px', color: bmiColor, fontWeight: 'bold' }}>
                        {bmiLabel} : {bmi}
                    </Typography>
                </>
            )}
        </Container>
    );
};

export default BmiCalculator;
