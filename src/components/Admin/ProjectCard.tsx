import { Draggable } from '@hello-pangea/dnd';
import { Card } from '../../styles/Containers';
import { CardTitle } from '../../styles/Texts';

function ProjectCard({
  project,
  index,
}: {
  project: { id: number | string; thumb: string; projectName: string };
  index: number;
}) {
  return (
    <Draggable draggableId={project.id.toString()} index={index}>
      {(prov) => (
        <div
          ref={prov.innerRef}
          {...prov.draggableProps}
          {...prov.dragHandleProps}
        >
          <Card>
            <div id="card-img">
              <img src={project.thumb} alt={project.projectName} />
            </div>
            <div id="card-content">
              <CardTitle>{project.projectName}</CardTitle>
            </div>
          </Card>
        </div>
      )}
    </Draggable>
  );
}

export default ProjectCard;
