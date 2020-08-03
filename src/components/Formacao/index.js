import React, { Component } from 'react';
import api from '../../services/api';
import { StepCardGroupContainer, ContainerSteps, TitleSteps, SubtitleLink, Step } from './styles';

export default class Formacao extends Component {

    state = {
        title:'',
        subtitle:'',
        cor:'',
        url: '',
        steps: [],
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.alura.get('/formacao-react-js');
        
        const { description:{ title: localeTitle}, subtitle, color, videoUrl, steps } = response.data;

        this.setState({ 
            title: localeTitle,
            subtitle: subtitle,
            color: color,
            url: videoUrl,
            steps: steps,
         });
    }

    render() {
        return (
            <StepCardGroupContainer>
                <TitleSteps color={this.state.color}>{this.state.title}</TitleSteps> 
                <SubtitleLink href={this.state.url} target="_blank">{this.state.subtitle}</SubtitleLink>
                <ContainerSteps>
                    { this.state.steps.map( (step, index) => (
                        <Step key={step.id} title={step.description} color={this.state.color}>{step.title}</Step>
                    ))}
                </ContainerSteps>
            </StepCardGroupContainer>
        );
    }
}
    