import React, { useState } from "react";
import { Container, VStack, Heading, Input, Button, Table, Tbody, Tr, Td, Th, Thead, Text, HStack, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [netIncome, setNetIncome] = useState("");
  const [depreciation, setDepreciation] = useState("");
  const [amortization, setAmortization] = useState("");
  const [currentAssets, setCurrentAssets] = useState([{ name: "", beginning: "", ending: "" }]);
  const [currentLiabilities, setCurrentLiabilities] = useState([{ name: "", beginning: "", ending: "" }]);
  const [investingActivities, setInvestingActivities] = useState([{ name: "", inflow: "", outflow: "" }]);
  const [financingActivities, setFinancingActivities] = useState([{ name: "", inflow: "", outflow: "" }]);

  const handleAddRow = (setState, state) => {
    setState([...state, { name: "", beginning: "", ending: "" }]);
  };

  const handleRemoveRow = (setState, state, index) => {
    const newState = state.filter((_, i) => i !== index);
    setState(newState);
  };

  const handleChange = (setState, state, index, field, value) => {
    const newState = [...state];
    newState[index][field] = value;
    setState(newState);
  };

  const calculateCashFlow = () => {
    const netIncomeValue = parseFloat(netIncome) || 0;
    const depreciationValue = parseFloat(depreciation) || 0;
    const amortizationValue = parseFloat(amortization) || 0;

    const calculateWorkingCapitalChanges = (items) => {
      return items.reduce((acc, item) => {
        const beginning = parseFloat(item.beginning) || 0;
        const ending = parseFloat(item.ending) || 0;
        return acc + (beginning - ending);
      }, 0);
    };

    const currentAssetsChange = calculateWorkingCapitalChanges(currentAssets);
    const currentLiabilitiesChange = calculateWorkingCapitalChanges(currentLiabilities);

    const cashFlowFromOperatingActivities = netIncomeValue + depreciationValue + amortizationValue + currentAssetsChange + currentLiabilitiesChange;

    const calculateCashFlowFromActivities = (activities) => {
      return activities.reduce((acc, activity) => {
        const inflow = parseFloat(activity.inflow) || 0;
        const outflow = parseFloat(activity.outflow) || 0;
        return acc + (inflow - outflow);
      }, 0);
    };

    const cashFlowFromInvestingActivities = calculateCashFlowFromActivities(investingActivities);
    const cashFlowFromFinancingActivities = calculateCashFlowFromActivities(financingActivities);

    const totalCashFlow = cashFlowFromOperatingActivities + cashFlowFromInvestingActivities + cashFlowFromFinancingActivities;

    return {
      cashFlowFromOperatingActivities,
      cashFlowFromInvestingActivities,
      cashFlowFromFinancingActivities,
      totalCashFlow,
    };
  };

  const { cashFlowFromOperatingActivities, cashFlowFromInvestingActivities, cashFlowFromFinancingActivities, totalCashFlow } = calculateCashFlow();

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl">
          Cash Flow Statement Calculator
        </Heading>

        <VStack spacing={4} width="100%">
          <Heading as="h2" size="md">
            Income Statement
          </Heading>
          <Input placeholder="Net Income" value={netIncome} onChange={(e) => setNetIncome(e.target.value)} />
          <Input placeholder="Depreciation" value={depreciation} onChange={(e) => setDepreciation(e.target.value)} />
          <Input placeholder="Amortization" value={amortization} onChange={(e) => setAmortization(e.target.value)} />
        </VStack>

        <VStack spacing={4} width="100%">
          <Heading as="h2" size="md">
            Current Assets
          </Heading>
          {currentAssets.map((asset, index) => (
            <HStack key={index} spacing={2} width="100%">
              <Input placeholder="Name" value={asset.name} onChange={(e) => handleChange(setCurrentAssets, currentAssets, index, "name", e.target.value)} />
              <Input placeholder="Beginning Balance" value={asset.beginning} onChange={(e) => handleChange(setCurrentAssets, currentAssets, index, "beginning", e.target.value)} />
              <Input placeholder="Ending Balance" value={asset.ending} onChange={(e) => handleChange(setCurrentAssets, currentAssets, index, "ending", e.target.value)} />
              <IconButton icon={<FaTrash />} onClick={() => handleRemoveRow(setCurrentAssets, currentAssets, index)} />
            </HStack>
          ))}
          <Button leftIcon={<FaPlus />} onClick={() => handleAddRow(setCurrentAssets, currentAssets)}>
            Add Asset
          </Button>
        </VStack>

        <VStack spacing={4} width="100%">
          <Heading as="h2" size="md">
            Current Liabilities
          </Heading>
          {currentLiabilities.map((liability, index) => (
            <HStack key={index} spacing={2} width="100%">
              <Input placeholder="Name" value={liability.name} onChange={(e) => handleChange(setCurrentLiabilities, currentLiabilities, index, "name", e.target.value)} />
              <Input placeholder="Beginning Balance" value={liability.beginning} onChange={(e) => handleChange(setCurrentLiabilities, currentLiabilities, index, "beginning", e.target.value)} />
              <Input placeholder="Ending Balance" value={liability.ending} onChange={(e) => handleChange(setCurrentLiabilities, currentLiabilities, index, "ending", e.target.value)} />
              <IconButton icon={<FaTrash />} onClick={() => handleRemoveRow(setCurrentLiabilities, currentLiabilities, index)} />
            </HStack>
          ))}
          <Button leftIcon={<FaPlus />} onClick={() => handleAddRow(setCurrentLiabilities, currentLiabilities)}>
            Add Liability
          </Button>
        </VStack>

        <VStack spacing={4} width="100%">
          <Heading as="h2" size="md">
            Investing Activities
          </Heading>
          {investingActivities.map((activity, index) => (
            <HStack key={index} spacing={2} width="100%">
              <Input placeholder="Name" value={activity.name} onChange={(e) => handleChange(setInvestingActivities, investingActivities, index, "name", e.target.value)} />
              <Input placeholder="Cash Inflow" value={activity.inflow} onChange={(e) => handleChange(setInvestingActivities, investingActivities, index, "inflow", e.target.value)} />
              <Input placeholder="Cash Outflow" value={activity.outflow} onChange={(e) => handleChange(setInvestingActivities, investingActivities, index, "outflow", e.target.value)} />
              <IconButton icon={<FaTrash />} onClick={() => handleRemoveRow(setInvestingActivities, investingActivities, index)} />
            </HStack>
          ))}
          <Button leftIcon={<FaPlus />} onClick={() => handleAddRow(setInvestingActivities, investingActivities)}>
            Add Activity
          </Button>
        </VStack>

        <VStack spacing={4} width="100%">
          <Heading as="h2" size="md">
            Financing Activities
          </Heading>
          {financingActivities.map((activity, index) => (
            <HStack key={index} spacing={2} width="100%">
              <Input placeholder="Name" value={activity.name} onChange={(e) => handleChange(setFinancingActivities, financingActivities, index, "name", e.target.value)} />
              <Input placeholder="Cash Inflow" value={activity.inflow} onChange={(e) => handleChange(setFinancingActivities, financingActivities, index, "inflow", e.target.value)} />
              <Input placeholder="Cash Outflow" value={activity.outflow} onChange={(e) => handleChange(setFinancingActivities, financingActivities, index, "outflow", e.target.value)} />
              <IconButton icon={<FaTrash />} onClick={() => handleRemoveRow(setFinancingActivities, financingActivities, index)} />
            </HStack>
          ))}
          <Button leftIcon={<FaPlus />} onClick={() => handleAddRow(setFinancingActivities, financingActivities)}>
            Add Activity
          </Button>
        </VStack>

        <VStack spacing={4} width="100%">
          <Heading as="h2" size="md">
            Cash Flow Summary
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Category</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Cash Flow from Operating Activities</Td>
                <Td>{cashFlowFromOperatingActivities.toFixed(2)}</Td>
              </Tr>
              <Tr>
                <Td>Cash Flow from Investing Activities</Td>
                <Td>{cashFlowFromInvestingActivities.toFixed(2)}</Td>
              </Tr>
              <Tr>
                <Td>Cash Flow from Financing Activities</Td>
                <Td>{cashFlowFromFinancingActivities.toFixed(2)}</Td>
              </Tr>
              <Tr>
                <Td>Total Cash Flow</Td>
                <Td>{totalCashFlow.toFixed(2)}</Td>
              </Tr>
            </Tbody>
          </Table>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
