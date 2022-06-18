import yaml

def filter(x): return yaml.dump(x, default_flow_style=False)