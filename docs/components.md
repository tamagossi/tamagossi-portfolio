# Components

This project implements atomic component-based design pattern (refer to [Atomic Design by Brad Frost](http://bradfrost.com/blog/post/atomic-web-design/)). There are five component types used in this project :

1. Atoms
2. Molecules
3. Organisms
4. Layouts
5. Pages

Every components will use basic components from [Ant Design](https://ant.design/docs/react/introduce) as base component, thus we won't build everything from scratch.

## Things to Consider on Writing Components

1. Business logic agnostic component always preferred
2. Use class component coding style
3. Use lowerCamelCase on writing props name (applied also to other variables)
4. Always use component type (`Organism`, `Molecule`, `Atom`) as component class name prefix

## Atoms

Atoms are basic building blocks for components (aside of atom itself) in this component based design pattern. Atom components will be written in `./components/atoms/`. For example, we'll have `AtomInputText` for atom component.  
Atom class must be written in `Atom[AtomName]` grammar as the class naming convention (for example : `AtomInputText`).

```
class  AtomInputText  extends  AtomInput {
    render() {
        return  <Form.Item  label={this.props.inputLabel}>
            <Input  size={this.props.inputSize}  {...this.state.handler()}  />
            <AtomInputError
                touched={this.props.touched}  hasError={this.props.hasError}  errMessage={this.props.errMessage}  />
        </Form.Item>;
        }
    }
}
```

Will be rendered into

`atom input image will be put in here in advance`

## Molecules

Molecules are group of atoms. For instance, forms (which include multiple inputs, button, title, etc.) are considered as molecules . Molecule components will be written in `./components/molecules/`.

Molecule class must be written in `Molecule[MoleculeName]` grammar as the class naming convention (for example : `MoleculeLoginForm`).

```
import  *  as  AtomInputs  from  './../../../atoms/inputs';

class  MoleculeLoginForm  extends  React.Component {
    render() {
        return  <div>
                    <form  layout="vertical"  onSubmit={this.login}>
                        <AtomInputs.AtomInputText
                            inputLabel="Email Adress"
                            inputSize="large"
                            handler={handler}
                            touched={touched}
                            hasError={hasError("required")}
                            errMessage="Username is required"  />
                        <Form.Item>
                            <Button  type="primary"  htmlType="submit" block  disabled={invalid || pristine || pending}>
                            Submit</Button>
                        </Form.Item>
                    </form>
                </div>;
        }
    }
}
```

Will be rendered into

`molecule form image will be put in here in advance`

## Organisms

Organisms are group of molecules. For instance, we have a section of left side of a web page which contains login form. Organism components will be written in `./components/organisms/`.

Organism class must be written in `Organism[OrganismName]` grammar as the class naming convention (for example : `OrganismLoginFormSection`).

```
import  MoleculeLoginForm  from  './../../../molecules/forms/loginForm';

class  OrganismLoginFormSection  extends  React.Component {
    render() {
        return  <div>
            <Row  gutter={100}>
                    <Col  span={16}  offset={3}  className="gutter-row">
                    <div>
                        <MoleculeLoginForm></MoleculeLoginForm>
                    </div>
                </Col>
            </Row>
        </div  >;
    }
}
```

Will be rendered into

`organism form section image will be put in here in advance`

## Layouts

Ant design Layouting will be used in this project, thus, we won't need to write anything new for layout. Refer to [https://ant.design/components/layout/](https://ant.design/components/layout/) for more information.

## Pages

Pages are react components which include whole building block of a web page (it can be atoms, molecules, or organisms). Page components will be written in `./pages/`
