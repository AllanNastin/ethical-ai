

import streamlit as st
import pandas as pd
import networkx as nx
import plotly.graph_objects as go
from pdfquery import pdfquery

# Define the heads, relations, and tails
head = ['drugA', 'drugB', 'drugC', 'drugD', 'drugA', 'drugC', 'drugD', 'drugE', 'gene1', 'gene2', 'gene3', 'gene4', 'gene50', 'gene2', 'gene3', 'gene4']
relation = ['treats', 'treats', 'treats', 'treats', 'inhibits', 'inhibits', 'inhibits', 'inhibits', 'associated', 'associated', 'associated', 'associated', 'associated', 'interacts', 'interacts', 'interacts']
tail = ['fever', 'hepatitis', 'bleeding', 'pain', 'gene1', 'gene2', 'gene4', 'gene20', 'obesity', 'heart_attack', 'hepatitis', 'bleeding', 'cancer', 'gene1', 'gene20', 'gene50']

# Create a dataframe
df = pd.DataFrame({'head': head, 'relation': relation, 'tail': tail})

# Create a graph
G = nx.Graph()
for _, row in df.iterrows():
    G.add_edge(row['head'], row['tail'], label=row['relation'])

# Streamlit app
st.set_page_config(layout="wide", page_title = "Ethical Ai Evaluation Tool")
# st.set_page_config(page_title="Ethical Evaluation Tool")
st.title('Ethical AI Evaluation Tool')
# Sidebar


# Adds two screens 
left, right = st.columns(2)

# Get positions for nodes using Fruchterman-Reingold layout
pos = nx.fruchterman_reingold_layout(G, k=0.5)

# Plotly figure
fig = go.Figure()

# Add edges
for edge in G.edges():
    fig.add_trace(go.Scatter(
        x=[pos[edge[0]][0], pos[edge[1]][0], None],
        y=[pos[edge[0]][1], pos[edge[1]][1], None],
        mode='lines',
        line=dict(width=0.5, color='gray'),
        hoverinfo='none'
    ))

# Add nodes
for node in G.nodes():
    fig.add_trace(go.Scatter(
        x=[pos[node][0]],
        y=[pos[node][1]],
        mode='markers+text',
        marker=dict(size=20, color='purple'),  # Increase size for better visibility
        text=[node],
        textposition='top center',
        hoverinfo='text',
        textfont=dict(size=10)
    ))

# Add edge labels
for edge in G.edges():
    x = (pos[edge[0]][0] + pos[edge[1]][0]) / 2
    y = (pos[edge[0]][1] + pos[edge[1]][1]) / 2
    fig.add_trace(go.Scatter(
        x=[x],
        y=[y],
        mode='text',
        text=[G[edge[0]][edge[1]]['label']],
        textposition='middle center',
        hoverinfo='none',
        textfont=dict(size=10)
    ))

# Update layout
fig.update_layout(
    title='Sample Knowledge Graph',
    title_font_size=16,
    showlegend=False,
    hovermode='closest',
    margin=dict(b=20, l=5, r=5, t=40),
    xaxis_visible=False,
    yaxis_visible=False
)

### RENDERING ###
# Define the pages
pages = ["Page 1", "Page 2", "Page 3"]

# Initialize session state
page_state = st.session_state.get("page", pages[0])

# Sidebar navigation
selected_page = st.sidebar.radio("Select Page", pages)

# Update current page in session state
if selected_page != page_state:
    page_state = selected_page
    st.session_state.page = page_state

# Display content based on the selected page
if page_state == "Page 1":
    st.subheader("Knowledge Graph Generator")
    # Add your content for Page 1
    st.write("""
            ### Upload File
            """)
    uploaded_file = st.file_uploader("Choose a PDF file")
    st.plotly_chart(fig)

elif page_state == "Page 2":
    st.subheader("Documentation")
    # Add your content for Page 2
elif page_state == "Page 3":
    st.subheader("Misc")
    # Add your content for Page 3




